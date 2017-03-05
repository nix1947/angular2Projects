import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: 'app/components/profile.component.html',
  providers: [GithubService]

})
export class ProfileComponent {
    user: any[];
    repos: any[];
    username: string = " "

    constructor(private _githubService: GithubService) {

    }

    searchUser() {
      this._githubService.updateUser(this.username);
      (this._githubService.getUsers().subscribe(user => {
        this.user = user;
      }));

      (this._githubService.getRepos().subscribe(repos => {
        this.repos = repos;
      }));

    }
 }
