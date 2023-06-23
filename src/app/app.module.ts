import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { TestService} from './test.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FindPatientComponent } from './find-patient/find-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HealthIssueComponent } from './health-issue/health-issue.component';
import { AuthService } from './services/auth.service';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { HealthissueDetailsComponent } from './healthissue/healthissue-details/healthissue-details.component';
import { HealthissueAddComponent } from './healthissue/healthissue-add/healthissue-add.component';
const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'AddPatient', component: AddPatientComponent },
  { path: 'Login', component: UserLoginComponent },
  { path: 'Home', component: UserLoginComponent},
  { path: 'FindPatient', component: FindPatientComponent },
  { path: 'Login', component: UserLoginComponent },
  { path: 'Register', component: UserRegisterComponent },
  { path: '**', component: UserLoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    NavBarComponent,
    SidebarComponent,
    routingComponent,
    HealthIssueComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HealthissueDetailsComponent,
    HealthissueAddComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TestService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
