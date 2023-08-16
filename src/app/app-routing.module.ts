import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'post/:id', component: PostDetailComponent},
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
