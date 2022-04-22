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
  //user: User = {} as User
  isAuth: boolean = true;



  constructor(private userService: UserService, private router: Router) { 

    this.myForm = new FormGroup({

    "login": new FormControl("", [Validators.required]),
    "password": new FormControl("", [Validators.required]),

    });
  }

  ngOnInit(): void {
  }

  checkUser(){
    if(this.myForm.invalid){
      return;
    }
    if(this.userService.signIn(this.myForm.controls["login"].value, this.myForm.controls["password"].value)){
      
      this.myForm.reset(); // очистка формы
      this.isAuth = true;
      this.router.navigate(["/"]);
      return;
    }
    this.isAuth = false;
    return;
  }

  //просмотр пароля
  eyeToggle: boolean = true;
  typePass:string = 'password';
  classEye:string = 'bi-eye';

  showPassword():void{
    console.log("click");
    
    if (this.eyeToggle == true){
      this.typePass = 'text';
      this.classEye = 'bi-eye-slash';
      this.eyeToggle = false;
      console.log("false");
      return
    } else {
      this.typePass = 'password';
      this.classEye = 'bi-eye';
      this.eyeToggle = true;
      console.log("true");
      return
    }
  }

}
