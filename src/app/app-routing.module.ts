import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageComponent} from './first-page/first-page.component';
import {SecondPageComponent} from './second-page/second-page.component';
import {ThirdPageComponent} from './third-page/third-page.component';


const routes: Routes = [
   {
   path: 'first-page',
   component: FirstPageComponent,
   },
   {
     path: 'second-page',
     component: SecondPageComponent,
   },
   {
     path: 'list-items',
     component: ThirdPageComponent,
   },
  {
    path: '**',
    component: FirstPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
