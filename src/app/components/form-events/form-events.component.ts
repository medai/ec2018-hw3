import { Component } from '@angular/core';


interface User {name:   string,
                email:  string,
                edit:   boolean}


@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.css']
})


export class FormEventsComponent {

  user: User = {name: '', email: '', edit: false};

  users: User[] = [
                    {name: 'name1', email: 'example1@example.com', edit: false},
                    {name: 'name2', email: 'example2@example.com', edit: false}
                  ];


  constructor() { }


  onSubmit(form){
    this.users.push({
      name:   this.user.name,
      email:  this.user.email,
      edit:   false
    });
    form.resetForm();
  }


  removeUser(i){
    this.users.splice(i, 1);
  }


  editUser(i, ){
    // console.log("this.user = ", this.users[i]);
    this.users[i].edit = true;
  }


  saveUser(i){
    this.users[i].edit = false;
  }


}
