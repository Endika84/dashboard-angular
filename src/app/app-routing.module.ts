import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './page/progress/progress.component';
import { Grafica1Component } from './page/grafica1/grafica1.component';
import { NopagefoundComponent } from './page/nopagefound/nopagefound.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
      {
        path: 'grafica1',
        component: Grafica1Component
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
    ]
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: '**',
    component: NopagefoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
