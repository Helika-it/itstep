import { HttpClient } from '@angular/common/http';
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

  signInForm: FormGroup = {} as FormGroup; //определяем тип формы
  //user: User = {} as User
  user: User | undefined;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { 

  };

  ngOnInit(): void {

    this.signInForm = new FormGroup({
      
      "login": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required])
      
    })

    
    //==
      // this.http.get('assets/user.json').subscribe((data:any) => this.user = new User(data.name, data.login, data.password, data.role));
    //==
    
  };

  // ======================

  isAuth: boolean = true;

  checkUser(){

    if(this.signInForm.invalid){
      return;
    }

//?
    let data = {
      
      login: this.signInForm.controls["login"].value,
      password: this.signInForm.controls["password"].value,
        
      }
//?    

    if(this.userService.signIn(this.signInForm.controls["login"].value, this.signInForm.controls["password"].value)){
      
      this.signInForm.reset(); // очистка формы
      this.isAuth = true;
      this.router.navigate(["/"]);
      return;

    }

    this.isAuth = false;
    return;
  }

  // ======================

  //! просмотр пароля
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
