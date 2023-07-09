import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  name ?: string;
  constructor(private userService: UserService, private router: Router) { }


  addUser($event: any) {
    $event.preventDefault();
    console.log(this.name);
    const user = new UserModel();
    user.name = this.name
    this.userService.addUser(user).subscribe(value => {
      console.log(value);
      alert("User added successfully")
      this.router.navigate(['user/all'])
    })
  }

  ngOnInit(): void {
  }
}
