import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl , Validators,  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nyap',
  templateUrl: './nyap.component.html',
  styleUrls: ['./nyap.component.scss'],
})
export class NyapComponent  implements OnInit {
  ContactForm: FormGroup

  constructor(
    private fb:FormBuilder
  ) {this.ContactForm=this.fb.group({
      conta:['', [Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(10),Validators.maxLength(10)]],
      conta1:['', [Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(10),Validators.maxLength(10)]],
      conta2:['', [Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(10),Validators.maxLength(10)]],
      infoa:['',Validators.pattern('[A-Za-z0-9]+')],
      numext:['', Validators.required,Validators.pattern('[0-9]+')],
      numint:['', Validators.required,Validators.pattern('[0-9]+')],
      numcel:['', [Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(10),Validators.maxLength(10)]],
      numtel:['', [Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(10),Validators.maxLength(10)]],
      numcod:['', [Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(5),Validators.maxLength(5)]],
      
    })
   }

  ngOnInit() {}

}
