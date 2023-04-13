import { UsersRestService } from 'src/app/modules/profile/services/users-rest.service';
import { Component, OnInit } from '@angular/core';
import { UserApi } from 'src/app/sdk';

@Component({
  selector: 'alto-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss','../../../../layout/menu/menu.component.scss'],
})
export class AdminMenuComponent implements OnInit {
  constructor(private readonly usersRestService:UsersRestService) { }
  user!: UserApi

  ngOnInit() { 
    this.usersRestService.getMe().subscribe((user)=> {
      this.user = user
    })
    
  }


}