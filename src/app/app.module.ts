import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './page/nopagefound/nopagefound.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './page/progress/progress.component';
import { Grafica1Component } from './page/grafica1/grafica1.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcrumbComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    Grafica1Component,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
