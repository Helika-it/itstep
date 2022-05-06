import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.get().subscribe(
      ((data) => this.users = data)
    );
  }

  delete(id: number){
    if (id == this.userService.currentUserId){
      console.log("Tекущий пользователь!!!")
      return
    }

    // if (this.user.role == "admin"){
    // console.log("Администратор!!!")
    //   return
    // }
    
    console.log(id)
    this.userService.remove(id).subscribe();
    this.router.navigate(["/user"]);
  }

}
