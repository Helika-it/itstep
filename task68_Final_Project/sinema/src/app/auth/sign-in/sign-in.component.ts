import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

  myForm: FormGroup = {} as FormGroup; //определяем тип формы
  //user: User = {} as User
  



  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { 

    // this.myForm = new FormGroup({

    // "login": new FormControl("", [Validators.required]),
    // "password": new FormControl("", [Validators.required])

    // });
  };

  ngOnInit(): void {

    this.myForm = new FormGroup({
      
      "login": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required])
      
    })
  };


  isAuth: boolean = true;

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
    
    if (this.eyeToggle == true){
      this.typePass = 'text';
      this.classEye = 'bi-eye-slash';
      this.eyeToggle = false;
      return
    } else {
      this.typePass = 'password';
      this.classEye = 'bi-eye';
      this.eyeToggle = true;
      return
    }
  }

}
