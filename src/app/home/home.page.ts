import { Component } from '@angular/core';
import { BiciUsersService } from '../services/bici-users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  users: any[] = [];

  constructor(private usersService: BiciUsersService) {}

  ionViewDidEnter(){
    this.usersService.getNewUsers().then((newUsers) => {
      this.users = newUsers.data;
      console.log(newUsers.data);
    });
  }

}
