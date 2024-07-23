import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DataService } from '../../data.service';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule,HttpClientModule],
  providers: [HttpClient],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  cities: any[] | undefined;
 private sub!:Subscription
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private service: DataService) {
    this.myForm = fb.group({
      name: [''],
      phones: fb.array([]),
      selectedCity: new FormControl<any | null>(null)
    })

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
      console.log("compoenent is destroyed")
    }
  }
  ngOnInit(): void {
   this.sub= this.service.listUsers().subscribe({
      next: (res) => {
        console.log("data from api", res)
      },
      error: (erro: HttpErrorResponse)=>{
        console.log(erro)
      }
    })
    this.createUser();
  }

  get phonesForm() {
    return this.myForm.get('phones') as FormArray
  }

  addPhone() {
    const phone = this.fb.group({
      code: [''],
      number: ['']
    })

    this.phonesForm.push(phone)
  }

  deletePhone(i: number) {
    this.phonesForm.removeAt(i)
  }

  createUser(){
    this.service.createUser({
      "name": "morpheus",
      "job": "leader"
  }).subscribe(res=>{
    console.log("data is inserted", res)
  })
  }
}
