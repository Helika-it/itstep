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

  
  redirectTo(url:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([url]));
 }

  currentUserId = this.userService.currentUserId;
  delete(id: number){
    if (id == this.currentUserId){
      console.log("Tекущий пользователь!!!")
      return
    }
    
    console.log(id)
    this.userService.remove(id).subscribe();
    this.redirectTo('/user');
  }

}
