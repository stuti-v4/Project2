import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidmeterComponent } from './covidmeter/covidmeter.component';
import { HomeComponent } from './home/home.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { UseraddComponent } from './useradd/useradd.component';


const routes: Routes=[
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:'useradd',
    component:UseraddComponent
  },
  {
    path:'covidmeter',
    component:CovidmeterComponent
  },
  {
    path:'showuser',
    component:ShowuserComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,UseraddComponent,ShowuserComponent];