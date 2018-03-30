import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  size = 8;

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')
      .map(function (responce) {
        return responce.json();
      })
      .map(responce => responce.results)
      .map(users => {
        return users.map(u => {
          return {
            name: u.name.first + ' ' + u.name.last,
            image: u.picture.large,
            geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street
          };
        });
      });
  }

  setSize(size) {
    this.size = size;
  }
}
