import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable} from "rxjs";
import {environment} from "../../environment/environment";
import {LoginModel} from "../models/login.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly SERVICE_URL = `${environment.bffUrl}/api/users`;

  constructor(private httpClient: HttpClient) { }

  login(loginCredentials: LoginModel): Observable<User> {
    return this.httpClient.post<User>(`${this.SERVICE_URL}/login`, loginCredentials);
  }
}
