import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  tableData?: any;

  constructor(private userService: UserService) {  }
  addUser(){
    this.userService.allUser().subscribe(
      (data) => {
        this.tableData = data;
      }
    )
  }

  ngOnInit(): void {
    this.addUser()
  }
}
