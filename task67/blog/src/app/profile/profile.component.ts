import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from '../core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  myForm: FormGroup; //определяем тип формы
  user: User = {} as User;

  id = this.userService.getCurrentUserId();
  name = this.userService.getCurrentUser().name;
  login = this.userService.getCurrentUser().login;
  password = this.userService.getCurrentUser().password;
  role = this.userService.getCurrentUser().role;

  constructor(private userService: UserService, private router: Router) { 
    this.myForm = new FormGroup({

      
            
      "name": new FormControl(this.name, [Validators.required]),
      "login": new FormControl(this.login, [Validators.required]),
      "password": new FormControl(this.password, [Validators.required]),
      "role": new FormControl(this.role),
  })
  
   }
  

  ngOnInit(): void {
  }


  editUser(id:number, name:string, login:string, password:string, role:string){
    if(this.myForm.invalid)
            return;
            
    this.user = {
      id: this.userService.getCurrentUserId(),
      name: this.myForm.controls["name"].value,
      login: this.myForm.controls["login"].value,
      password: this.myForm.controls["password"].value,
      role: this.myForm.controls["role"].value
    }
    
    this.userService.edit(this.user);
    this.myForm.reset();
    this.router.navigate(["/home"]);

  }

}
