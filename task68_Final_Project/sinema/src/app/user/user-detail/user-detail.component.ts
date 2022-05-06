import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {


  user: User = {} as User;


    constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { 
      
    }

  // ngOnInit(): void {
  //   this.userService.getById(this.route.params["id"]).subscribe(
  //     (data) => {
  //     this.user = data;
  //   }
  //   );
  // }

  ngOnInit(): void {
    this.userService.getById(this.route.snapshot.params['id']).subscribe(
      (data) => {
      this.user = data;
    }
    );
  }

  get(userId: number): any{
    return this.userService.getById(userId);
  } 

  delete(id: number){
    console.log(id)
    this.userService.remove(id);
  }
}

