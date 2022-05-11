import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = {} as FormGroup; //определяем тип формы
  user: User = {} as User;
  

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  
   }
  

  ngOnInit(): void {
    
    this.signUpForm = new FormGroup({
            
      "name": new FormControl("", [Validators.required]),
      "login": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required])      

    })
  }

  // ======================

  signUp(){
    if(this.signUpForm.invalid){
      return;
    }

    let data = {
      
      name: this.signUpForm.controls["name"].value,
      login: this.signUpForm.controls["login"].value,
      password: this.signUpForm.controls["password"].value,
      role: 'user'
        
      }

    // this.userService.signUp(data);
    this.userService.signUp(data)
    this.signUpForm.reset();
    this.router.navigate(["/"]);

  }

  // ======================

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
