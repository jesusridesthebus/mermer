import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { DoomroomComponent } from './doomroom/doomroom.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {preload: true}
  },
  {
    path: 'doom',
    component: DoomroomComponent,
    data: {preload: true}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
