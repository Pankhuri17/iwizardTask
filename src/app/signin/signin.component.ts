import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  title = 'form';
  signinForm: FormGroup;
  submitted: any = [];


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['',Validators.required]
      },)
  }

  get signin() {return this.signinForm.controls;}

  onSubmit(){
    this.submitted = true;

    if(this.signinForm.invalid){
      return;
    }else if(this.signinForm.valid){
      alert("username/password incorrect");
    }
    
    // this.signinForm.reset();
  }

}
