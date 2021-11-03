import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/Auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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


}
