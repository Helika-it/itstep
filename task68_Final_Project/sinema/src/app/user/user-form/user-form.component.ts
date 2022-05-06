import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  myForm: FormGroup = {} as FormGroup; //определяем тип формы
  user: User = {} as User;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {

  }
  

ngOnInit(): void {
  
  if(this.route.snapshot.params['id'] > 0)

    this.userService.getById(this.route.snapshot.params['id']).subscribe(

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
  
  
  else{

    this.myForm = new FormGroup({
            
      "name": new FormControl("", [Validators.required]),
      "login": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required]),
      "role": new FormControl("")

    })
  }
}

//! добавление

  addUser(){
    if(this.myForm.invalid){
      return;
    }
      


    let data = {
      
      name: this.myForm.controls["name"].value,
      login: this.myForm.controls["login"].value,
      password: this.myForm.controls["password"].value,
      role: this.myForm.controls["role"].value 

    } 

    this.userService.create(data).subscribe(
      data => {
        
      }
    );
    this.myForm.reset();
    this.router.navigate(["/user"]);

  }

  //!редактирование

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
    this.router.navigate(["/user"]);

  }

}
