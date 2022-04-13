import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/core';


@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  isAuth: boolean = false;

  constructor(private userService: UserService) { 
    this.user = userService.getCurrentUser()
    
  }

    authUser(){
      if(this.userService.getCurrentUserId() > 0){
      this.isAuth = false;
      return;
    } else {
      this.isAuth = true;
      return;
    }
    }
    

  user: User;

  ngOnInit(): void {
  }

}
