import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersvService } from "./../providers/usersv.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  users: Array<string> = [];
  private sub: any;
  private userName: string = "";

  constructor(
    private usersvService: UsersvService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // get username from Query Params
    // Subscribe to Observable
    // pass anonymoue callback function to subscribe method
    this.sub = this.route.queryParams.subscribe(params => {
      this.userName = params["username"];
    });
    this.usersvService.getUsers().subscribe(data => {
      this.users = data.users;
    });
  }

  onLogout() {
    this.router.navigate(["/"]);
  }
}
