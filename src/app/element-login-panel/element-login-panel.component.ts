import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../model/user-login";
import {UsermanagementService} from "../service/usermanagement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-element-login-panel',
  templateUrl: './element-login-panel.component.html',
  styleUrls: ['./element-login-panel.component.scss']
})
export class ElementLoginPanelComponent implements OnInit {

  user = new UserLogin();
  errorMessage!: string;
  username!: string;

  constructor(private service: UsermanagementService, private router: Router) {}

  ngOnInit(): void {
  }

  /**
   * Calls loginUser method of UsermangementService;
   * saves JWT from response in localStorage as a header;
   */
  loginUser() {
    this.service.loginUser(this.user).subscribe(
      data => {
        this.username = data;
        // set jwt as 'Authorization'
        localStorage.setItem('Authorization', this.username);
        this.router.navigate(['/mainPage'])
      },
      error => {
        console.log(error)
        this.errorMessage = "Wrong username or password"
      }
    );
  }

  goToRegistrationPage() {
    this.router.navigate(['registration']);
  }
}
