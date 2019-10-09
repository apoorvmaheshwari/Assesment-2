import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddComponent} from './add/add.component';
import {ViewComponent} from './view/view.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path:'add', component:AddComponent},
  { path:'view',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
