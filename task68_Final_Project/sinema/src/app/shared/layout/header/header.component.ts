import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  authUser = this.userService.getCurrentUserId();


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
        this.isAuth = !isAuth;
      }
    
    )
  }

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
