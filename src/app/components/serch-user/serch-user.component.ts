import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SerchUserDataService} from './serch-user-data.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-serch-user',
  templateUrl: './serch-user.component.html',
  styleUrls: ['./serch-user.component.css']
})


export class SerchUserComponent implements OnInit {

  user: Observable<any>;
  nickname: string;
  searchingUser: boolean = false;
  showContinueBtn: boolean = false;
  @Output() newAppMessage: EventEmitter<any> = new EventEmitter();


  constructor(
    public serchUserService: SerchUserDataService
  ) { }


  ngOnInit() {
  }


  onSearch({valid, value}) {

    this.searchingUser = true;

    this.serchUserService.serchUser(this.nickname).subscribe(user => {
      // console.log("OK", user);
      this.user = user;
      this.searchingUser = false;
      this.showContinueBtn = true;

      this.newAppMessage.emit({
        message: `We found: ${this.nickname}`,
        error: false
      });

      this.serchUserService.setUser(user);

    }, error => {
      // console.log("ERROR", error);

      this.searchingUser = false;

      this.newAppMessage.emit({
        message: `User \"${this.nickname}\" not found`,
        error: true
      });
      this.nickname = '';

    });
}

}
