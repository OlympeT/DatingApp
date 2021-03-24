import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/User';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The DatingApp';
  userJson: string = '';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    this.userJson = String(localStorage.getItem('user'));
    const user: User = JSON.parse(this.userJson);
    this.accountService.setCurrentUser(user);
  }
}
