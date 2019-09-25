import { Injectable } from "@angular/core";
import { freshUser } from "../users/users.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsersvService {
  users: freshUser[] = [];

  private usersEndpoint: string = "http://localhost:3000/users";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  Adduser(firstName: string, lastName: string, email: string) {
    this.users.push(new freshUser(firstName, lastName, email));
    console.log(this.users);

    return this.users;
  }
  getUsers(): Observable<any> {
    return this.http
      .get(this.usersEndpoint, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}
