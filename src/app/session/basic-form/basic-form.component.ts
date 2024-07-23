import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss'
})
export class BasicFormComponent {
 isFormSubmiteed: boolean = false
  myForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.myForm = fb.group({
      username:['',Validators.required],
      password:['',[Validators.required, Validators.minLength(6)]],
      email:['',[Validators.required, Validators.email]]
    })
  }

  onSubmit(){
    this.isFormSubmiteed = true
    console.log("is form Valid", this.myForm.valid)
    console.log(this.myForm.value)
  }
}
