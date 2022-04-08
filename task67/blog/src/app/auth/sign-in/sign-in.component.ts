import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  myForm: FormGroup; //определение типа формы
  user: User = {} as User

  constructor(private userService: UserService, private router: Router) { 

    this.myForm = new FormGroup({

    "login": new FormControl("", [Validators.required]),
    "password": new FormControl("", [Validators.required]),

  })
  }

  ngOnInit(): void {
  }

  chekUser(){
    if(this.myForm.invalid){
      return;
    }
    
    let chekLogin = this.myForm.controls["login"].value;
    let chekPassword = this.myForm.controls["password"].value;

    
    
  }

}
