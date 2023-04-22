import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../model/user-login";
import {UsermanagementService} from "../service/usermanagement.service";
import {Router} from "@angular/router";
import {ResponseDTO} from "../model/ResponseDTO";

@Component({
  selector: 'app-element-login-panel',
  templateUrl: './element-login-panel.component.html',
  styleUrls: ['./element-login-panel.component.scss']
})
export class ElementLoginPanelComponent implements OnInit {

  user = new UserLogin();
  errorMessage!: string;
  response!: ResponseDTO;
  permission!: string;

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
        this.response = data;
        localStorage.setItem('Authorization', this.response.permission);
        localStorage.setItem('cas-ticket', this.response.ticket);
        this.router.navigate(['/mainPage']);
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
