import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import component
import { HomeComponent } from       './components/home/home.component';
import { InfoComponent } from       './components/info/info.component';
import { NotFoundAppComponent } from './components/not-found-app/not-found-app.component';
import { FormEventsComponent } from './components/form-events/form-events.component';
import { TodoComponent } from       './components/todo/todo.component';
import { UserComponent } from       './components/user/user.component';
import { AboutComponent } from       './components/about/about.component';

const routes: Routes = [
  { path: '',       component: HomeComponent},
  { path: 'info',   component: InfoComponent},
  { path: 'form',   component: FormEventsComponent},
  { path: 'todo',   component: TodoComponent},
  { path: 'user',   component: UserComponent},
  { path: 'about',   component: AboutComponent},
  { path: '**',     component: NotFoundAppComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
