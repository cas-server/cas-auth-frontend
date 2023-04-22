import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsermanagementService} from "../service/usermanagement.service";
import {UserRegistration} from "../model/user-registration";

@Component({
  selector: 'app-page-main-menu',
  templateUrl: './page-main-menu.component.html',
  styleUrls: ['./page-main-menu.component.scss']
})
export class PageMainMenuComponent implements OnInit {

  permission!: String;
  errorMessage!: String;
  allUsers!: UserRegistration [];

  constructor(private service: UsermanagementService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('cas-ticket') === undefined
      || localStorage.getItem('cas-ticket') === null
      || localStorage.getItem('Authorization') === undefined
      || localStorage.getItem('Authorization') === null) {
      this.router.navigate(['/login'])
    }
    else {
      this.permission = localStorage.getItem('Authorization')!.toString();
      this.getAllUsers();
    }
  }

  getAllUsers() {
    this.service.getUsers().subscribe(
      data => {
        this.allUsers = data;
      },
      error => {
        this.errorMessage="No user found.";
      }
    );
  }

  /**
     * navigates to "login"-webpage
     */
    goToLoginPage() {
        this.service.logoutAndDeleteCasTicket().subscribe(
      data => {
          localStorage.removeItem('Authorization');
          localStorage.removeItem('cas-ticket');
       },
      error => {
         this.errorMessage="There was a problem with the logout.";
        }
      );

      this.router.navigate(['/login'])
    }

    deleteUser(id: number) {
      this.service.deleteUser(id).subscribe(
          data => {
            this.ngOnInit();
          },
          error => {
            this.errorMessage="There was a problem while deleting the user.";
          }
      );
    }
}
