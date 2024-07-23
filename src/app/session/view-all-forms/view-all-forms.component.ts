import { Component } from '@angular/core';
import { NestedFormComponent } from '../nested-form/nested-form.component';
import { BasicFormComponent } from '../basic-form/basic-form.component';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-view-all-forms',
  standalone: true,
  imports: [NestedFormComponent,BasicFormComponent,DynamicFormComponent],
  templateUrl: './view-all-forms.component.html',
  styleUrl: './view-all-forms.component.scss'
})
export class ViewAllFormsComponent {

}
