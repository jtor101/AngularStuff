import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Users";

  firstName: string = "Andrew";
  lastName: string = "Martin";
  email: string = "test@test.com";
  users: Array<string> = [];
  currentYear: number = 2019;
  newUserAdded: boolean = false;

  // executed when Add Mountain is clicked
  AddUser(): void {
    this.users.push(`${this.firstName} ${this.lastName} - ${this.email}`);

    this.newUserAdded = true;
  }

  // executed when the Reset button is clicked
  onReset(): void {
    this.firstName = "";
    this.lastName = "";
    this.email = "";

    this.newUserAdded = false;
  }

  getCurrentYear(): number {
    return this.currentYear;
  }

  getColor(): string {
    return this.newUserAdded === true ? "#000080" : "#FF0000"; // navy : red
  }
}
