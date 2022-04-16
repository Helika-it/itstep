import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/core';


@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {


  constructor(private userService: UserService) { 
    //this.user = userService.getCurrentUser() //не нужно при подписке
  }

    // authUser(){
    //   if(this.userService.getCurrentUserId() > 0){
    //   this.isAuth = false;
    //   return;
    // } else {
    //   this.isAuth = true;
    //   return;
    // }
    // }
    

  user: User = {} as User;
  isAuth: boolean = false;

  ngOnInit(): void {

    this.userService.currentUser.subscribe(
      (userData) => {
        this.user = userData;
      }
    )

    this.userService.isAuth.subscribe(
      (isAuth) => {
        this.isAuth = isAuth;
      }
    
    )
  }

}
