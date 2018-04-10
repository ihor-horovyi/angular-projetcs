import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/interfaces/user';

@Injectable()
export class GithubService {
  constructor(private http: Http) {}

  getUser(username: string): Observable<User> {
    // Register your client_id, client_secret and put here
    let client_id: string = '';
    let client_secret: string = '';

    return this.http.get(`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`)
      .map((response: Response) => response.json());
  }

}
