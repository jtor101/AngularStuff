import { Component, OnInit } from "@angular/core";
import { UsersvService } from "./../providers/usersv.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  // Array to hold Mountain Objects

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  currentYear: number = 2019;
  newuserAdded: boolean = false;

  users: any[] = [];
  constructor(private usersvservice: UsersvService) {}

  onReset(): void {
    this.firstName = "";
    this.lastName = "";
    this.email = "";

    this.newuserAdded = false;
  }

  // executed when Add Mountain is clicked
  Adduserinfo(): void {
    this.users = this.usersvservice.Adduser(
      this.firstName,
      this.lastName,
      this.email
    );
    this.newuserAdded = true;
  }

  getCurrentYear(): number {
    return this.currentYear;
  }

  getColor(): string {
    return this.newuserAdded === true ? "#000080" : "#FF0000"; // navy : red
  }

  // executed when the Reset button is clicked

  ngOnInit() {}
}
