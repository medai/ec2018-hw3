import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';


@Injectable()
export class SerchUserDataService {

  someUser: any;

  constructor(
    public http: HttpClient
  ) { }


  serchUser(userName){
    return this.http.get<Observable<any>>(`https://api.github.com/users/${userName}`);
  }

  setUser(user) {
    this.someUser = user;
  }

  getUser() {
    return this.someUser;
  }

}
