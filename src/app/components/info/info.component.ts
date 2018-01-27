import { Component, OnInit } from '@angular/core';
import {SerchUserDataService} from '../serch-user/serch-user-data.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  userInfo: any;

  constructor(
    public serchUserService: SerchUserDataService
  ) { }

  ngOnInit() {
    this.userInfo = this.serchUserService.getUser();
    // console.log('this.userInfo = ', this.userInfo);
  }

}
