import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import module
import { AppRoutingModule } from './app-routing.module';

// import component
import { AppComponent } from        './app.component';
import { FormEventsComponent } from './components/form-events/form-events.component';
import { TodoComponent } from       './components/todo/todo.component';
import { UserComponent } from       './components/user/user.component';
import { SerchUserComponent } from  './components/serch-user/serch-user.component';
import { InfoComponent } from       './components/info/info.component';
import { HomeComponent } from       './components/home/home.component';
import { AlertComponent } from      './components/alert/alert.component';
import { AboutComponent } from      './components/about/about.component';
import { NotFoundAppComponent } from'./components/not-found-app/not-found-app.component';

// import services
import { TodoDataService } from       './components/todo/todo-data.service';
import { UserDataService } from       './components/user/user-data.service';
import { SerchUserDataService } from  './components/serch-user/serch-user-data.service';


@NgModule({
  declarations: [
    AppComponent, FormEventsComponent, TodoComponent, UserComponent, SerchUserComponent,
    InfoComponent, HomeComponent, AlertComponent, NotFoundAppComponent, AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TodoDataService, UserDataService, SerchUserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
