import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiciUsersService {

  constructor() { }

  getNewUsers(){
    return fetch("https://reqres.in/api/users")
            .then(response => response.json());
  }

}
