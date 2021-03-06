import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-formuser',
  templateUrl: './formuser.component.html',
  styleUrls: ['./formuser.component.scss']
})


export class FormUserComponent implements OnInit {

  myForm: FormGroup; //определяем тип формы
  user: User = {} as User;

  constructor(private userService: UserService, private router: Router) {

    this.myForm = new FormGroup({
            
      "name": new FormControl("", [Validators.required]),
      "login": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required]),
      "role": new FormControl("user"),
  })
  
  }
  

ngOnInit(): void {
  }


  addUser(){
    if(this.myForm.invalid)
      return;
            
    let data = {
      name: this.myForm.controls["name"].value,
      login: this.myForm.controls["login"].value,
      password: this.myForm.controls["password"].value,
      role: this.myForm.controls["role"].value //! ?
    } 

    this.userService.create(data).subscribe(
      data => {
        console.log(data)
      }
    );
    this.myForm.reset();
    this.router.navigate(["/user"]);

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
    this.router.navigate(["/user"]);

  }
}

