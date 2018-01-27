import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../form-events/form-events.component.css', './user.component.css']
})
export class UserComponent implements OnInit {

  users:      any;
  addSuccess: boolean = false;
  addError:   boolean = false;
  editSuccess:boolean = false;
  editError:  boolean = false;
  delSuccess: boolean = false;
  delError:   boolean = false;
  createUser    = {name: '', email: '', edit: false, address: {city: ''}};
  userBeforeEdit: any;


  constructor(
    public userService: UserDataService

  ) { }


  ngOnInit() {
    this.userService.getUsers().subscribe(usersList =>{
      this.users = usersList;
    }, error => {
      console.log(error);
    });
  }

  addUser(form){
    this.userService.addUser(this.createUser).subscribe( user =>{
      this.users.unshift(user);
      form.resetForm();

      this.addSuccess = true;
      setTimeout(() => {
        this.addSuccess = false;
      }, 2000);

    }, error => {
      console.log(error);

      this.addError = true;
      setTimeout(() => {
        this.addError = false;
      }, 2000);
    });
  }


  showUser(i){
    this.userBeforeEdit = Object.assign({}, this.users[i]);
    this.userBeforeEdit.address = Object.assign({}, this.users[i].address);

    this.users[i].edit = true;
  }


  noSave(i){
    this.users[i]       =   this.userBeforeEdit;
    this.users[i].edit  = false;
  }


  editUser(i){
    this.users[i].edit = false;

    this.userService.editUser(this.users[i]).subscribe( newUser =>{
      this.users[i] = newUser;

      this.editSuccess = true;
      setTimeout(() => {
        this.editSuccess = false;
      }, 2000);

    }, error => {
      console.log(error);

      this.editError = true;
      setTimeout(() => {
        this.editError = false;
      }, 2000);
    });
  }


  removeUser(i){
    this.userService.delUser((i != 0)? i : 1).subscribe( good =>{
      this.users.splice(i, 1);

      this.delSuccess = true;
      setTimeout(() => {
        this.delSuccess = false;
      }, 2000);

    }, error => {
      console.log(error);

      this.delError = true;
      setTimeout(() => {
        this.delError = false;
      }, 2000);
    });
  }

}
