import { Injectable } from '@angular/core';
import { UsersService } from '../core/constants/users.service';
import { User } from '../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: User[] = [];

  constructor(private usersService: UsersService) {
    this.getAllUsers();
   }

  getAllUsers(): void {
    this.usersService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  login(email: string, password: string): boolean {
    if (email === 'admin@assessment.com' && password === 'admin@123') {
      localStorage.setItem('currentUser', JSON.stringify(this.users.find(item => item.role === 'admin')));
      return true;
    } else if (email === 'user@assessment.com' && password === 'user@123') {
      localStorage.setItem('currentUser', JSON.stringify(this.users.find(item => item.role === 'user')));
      return true;
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }
}
