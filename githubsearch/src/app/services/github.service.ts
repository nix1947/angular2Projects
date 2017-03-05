// import the injectible packeges
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id: string = "c213c56ebe22fbff7723";
  private client_secret: string = "559a3ce5aa1a73959abbcb20ac1b471f7fe493b5";

  constructor(private _http: Http) {
    this.username = "nix1947";
  }

  getUsers() {
    return this._http.get('http://api.github.com/users/'+this.username + "?client_id="+this.client_id + "&client_secret"+this.client_secret)
    .map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/'+this.username + "/repos?client_id="+this.client_id + "&client_secret"+this.client_secret)
    .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }




  // constructor(private _http: Http) {
  //   console.log("Github service ready");
  //   this.username = 'nix1947';
  // }
  //
  // getUser() {
  //   // return obserable in json format.
  //   return this._http.get('http://api.github.com/users/'+ this.username + '?client_id='+
  //   this.client_id + '&client_secret='+this.client_secret).map(res => res.json());
  // }

}
