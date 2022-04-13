import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  myForm: FormGroup; //определяем тип формы
  user: User = {} as User;

  constructor(private userService: UserService, private router: Router) {

    this.myForm = new FormGroup({
            
      "name": new FormControl("", [Validators.required]),
      "login": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required]),
  })
  
   }
  

ngOnInit(): void {
  }


  signUp(){
    if(this.myForm.invalid)
            return;
            
    let newUserId = this.userService.getNewUserId();
    this.user = {
      id: newUserId,
      name: this.myForm.controls["name"].value,
      login: this.myForm.controls["login"].value,
      password: this.myForm.controls["password"].value,
      role: "user"
    }

    this.userService.signUp(this.user);
    this.myForm.reset();
    this.router.navigate(["/"]);

  }
}
