import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './nested-form.component.html',
  styleUrl: './nested-form.component.scss'
})
export class NestedFormComponent {
  myForm: FormGroup
  constructor(private fb: FormBuilder) {
  const phone = fb.group({
    code:[''],
    number:['']
  })

    this.myForm = fb.group({
      name: [''],
      personalPhone:this.createPhoneGroup(),
      officePhone: this.createPhoneGroup()
    })
  }

  createPhoneGroup() {
    return this.fb.group({
      code: [''],
      number: ['']
    });
  }

  onSubmit(){
console.log(this.myForm.value)
  }
}
