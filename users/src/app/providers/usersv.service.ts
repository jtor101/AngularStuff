import { Injectable } from "@angular/core";
import { freshUser } from "../users/users.model";

@Injectable({
  providedIn: "root"
})
export class UsersvService {
  users: freshUser[] = [];

  constructor() {}

  Adduser(firstName: string, lastName: string, email: string) {
    this.users.push(new freshUser(firstName, lastName, email));
    console.log(this.users);

    return this.users;
  }
}
