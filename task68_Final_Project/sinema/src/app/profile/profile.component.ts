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

  profileForm: FormGroup = {} as FormGroup; //определяем тип формы
  user: User = {} as User;


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  
  }
  
  ngOnInit(): void {
    
    this.userService.getById(this.userService.getCurrentUserId()).subscribe(

      (data) => {
        console.log("profile1");
      this.user = data;

      this.profileForm = new FormGroup({
              
        "name": new FormControl(this.user.name, [Validators.required]),
        "login": new FormControl(this.user.login, [Validators.required]),
        "password": new FormControl(this.user.password, [Validators.required]),
        "role": new FormControl(this.user.role)
        
      })
    }
    );
  }


  editProfile(){
    if(this.profileForm.invalid)
      return;
            
    this.user = {
      id: this.user.id,
      name: this.profileForm.controls["name"].value,
      login: this.profileForm.controls["login"].value,
      password: this.profileForm.controls["password"].value,
      role: this.profileForm.controls["role"].value
    }
    
    console.log("profile2");

    this.userService.edit(this.user).subscribe();
    this.profileForm.reset();
    this.router.navigate(["/"]);

  }
}