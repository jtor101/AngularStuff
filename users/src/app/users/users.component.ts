import { Component, OnInit } from "@angular/core";
import { freshUser } from "./users.model";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  // Array to hold Mountain Objects

  users: freshUser[] = [];

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  currentYear: number = 2019;
  newuserAdded: boolean = false;

  // executed when Add Mountain is clicked
  Adduser(): void {
    this.users.push(new freshUser(this.firstName, this.lastName, this.email));

    this.newuserAdded = true;
  }

  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = "";
    this.lastName = "";
    this.email = "";

    this.newuserAdded = false;
  }

  getCurrentYear(): number {
    return this.currentYear;
  }

  getColor(): string {
    return this.newuserAdded === true ? "#000080" : "#FF0000"; // navy : red
  }
  constructor() {}

  ngOnInit() {}
}
