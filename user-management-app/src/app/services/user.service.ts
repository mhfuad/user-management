import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {UserModel} from "../models/user.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public addUser(user: UserModel) : Observable<any> {
    return this.httpClient.post(`${environment.BASE_URL}users/add`, user);
  }

  public allUser() {
    return this.httpClient.get(`${environment.BASE_URL}users/all`)
  }
}
