import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent }   from './homepage/homepage.component';
import { PostsComponent }      from './posts/posts.component';
import { PostDetailComponent }  from './post-detail/post-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'detail/:id', component: PostDetailComponent },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}