import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_service/authentication.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    if (localStorage.getItem('currentUser') !== null) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
