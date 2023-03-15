import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
@Component({
  selector: 'app-troc',
  templateUrl: './troc.component.html',
  styleUrls: ['./troc.component.css'],
  providers:[
    {
    provide:STEPPER_GLOBAL_OPTIONS,
    useValue:{showError:true}
    },

  ],
})
export class TrocComponent {



  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['',Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl:['',Validators.required],
  });

  isLinear = false;
stepper: any;

  constructor(private _formBuilder: FormBuilder){

  }

}
