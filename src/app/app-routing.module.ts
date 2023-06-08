import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AppComponent } from './app.component';
import { FindPatientComponent } from './find-patient/find-patient.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { HealthIssueComponent } from './health-issue/health-issue.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'FindPatient', component: FindPatientComponent },
  { path: 'AddPatient', component: AddPatientComponent },
  { path: 'Employee', component: TestcomponentComponent },
  { path: 'Home', component: SidebarComponent },
  { path: 'HealthIssues', component: HealthIssueComponent },
  { path: 'Login', component: UserLoginComponent },
  { path: 'Register', component: UserRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[AppComponent,FindPatientComponent,AddPatientComponent,HealthIssueComponent,UserLoginComponent,UserRegisterComponent]
