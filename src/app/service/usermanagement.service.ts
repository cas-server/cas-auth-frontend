import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {UserRegistration} from "../model/user-registration";
import {UserLogin} from "../model/user-login";

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  constructor(private http: HttpClient) { }

  /**
   * calls REST-API for creating a new User
   * @param user
   */
  public registerUser(user: UserRegistration): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/newUser", user)
  }

  /**
   * calls REST-API for user-login
   * @param user
   */
  public loginUser(user: UserLogin): Observable<any> {
    return this.http.post("http://localhost:8080/api/login", user, {responseType: 'text'})
  }

  /**
   * calls REST-API for getting all existing users
   */
  public getUsers(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/api/getAll");
  }

  /**
   * calls REST-API for deleting a user by id
   * @param id
   */
  public deleteUser(id: number): Observable<any> {
    return this.http.delete<any>("http://localhost:8080/api/delete/" + id)
  }

  public logoutAndDeleteCasTicket(): Observable<any> {
    return this.http.get("http://localhost:8080/api/logout");
  }
}
