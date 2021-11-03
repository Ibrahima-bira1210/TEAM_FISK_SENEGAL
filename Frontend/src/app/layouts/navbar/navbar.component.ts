import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/Auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role : any;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.getUserRole();
  }

  getUserRole() : void {
    this.role = this.authService.getRoles()[4]
    let user = this.authService.getRoles();
    console.log(user)
  }

  Logout():void{
    this.authService.logout()
  }

}
