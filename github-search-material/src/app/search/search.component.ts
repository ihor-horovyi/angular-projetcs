import { Component } from '@angular/core';
import {GithubService} from '../service/github.service';
import {User} from '../model/interfaces/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private githubService: GithubService) {
  }

  searchStr: string = '';
  minLength: number = 3;
  isLoaded: boolean = false;
  user: User;


  handleChange() {
    if (this.minLength <= this.searchStr.length) {
      this.githubService.getUser(this.searchStr).subscribe(user => {
        this.user = user;
        this.isLoaded = true;
      });
      this.isLoaded = false;
    }

    console.log(this.user);
  }
}
