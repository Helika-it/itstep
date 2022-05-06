import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../core';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  myForm: FormGroup = {} as FormGroup; //определяем тип формы
  user: User = {} as User;


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  
  }
  
  ngOnInit(): void {
    
    this.userService.getById(this.userService.getCurrentUserId()).subscribe(

      (data) => {

      this.user = data;

      this.myForm = new FormGroup({
              
        "name": new FormControl(this.user.name, [Validators.required]),
        "login": new FormControl(this.user.login, [Validators.required]),
        "password": new FormControl(this.user.password, [Validators.required]),
        "role": new FormControl(this.user.role)
        
      })
    }
    );
  }

  

  editUser(){
    if(this.myForm.invalid)
      return;
            
    this.user = {
      id: this.user.id,
      name: this.myForm.controls["name"].value,
      login: this.myForm.controls["login"].value,
      password: this.myForm.controls["password"].value,
      role: this.myForm.controls["role"].value
    }
    
    this.userService.edit(this.user).subscribe();
    this.myForm.reset();
    this.router.navigate(["/"]);

  }
}