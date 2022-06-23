import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
    ) { }
  
  user: User = {} as User;
  isAuth: boolean = false;

  authUser = this.userService.signIn(this.user.login, this.user.password);

    //   authUser(){
    //   if(this.userService.getCurrentUserId() > 0){
    //   this.isAuth = false;
    //   return;
    // } else {
    //   this.isAuth = true;
    //   return;
    // }
    // }




  ngOnInit(): void {

    this.userService.currentUser.subscribe(
      (userData) => {
        this.user = userData;
      }
    );

    this.userService.isAuth.subscribe(
      (isAuth) => {
        this.isAuth = isAuth;
      }
    );
  }

  // logout
  logout() {
    this.isAuth = false;
    this.userService.purgeAuth();
    this.router.navigate(["/"]);
  }

  // бургер-меню
  visible = "!is-open"

  visibility(event: any){
    
    if (event.target.classList.contains("m-menu")){
      if (this.visible == "!is-open")
      this.visible = ('is-open');
    } else {
      this.visible = ('!is-open');
    }
    
  }

}
