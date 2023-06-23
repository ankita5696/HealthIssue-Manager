import { Component } from '@angular/core';
import { HealthIssue } from 'src/HealthIssue';
import { OnInit, TemplateRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-healthissue-add',
  templateUrl: './healthissue-add.component.html',
  styleUrls: ['./healthissue-add.component.css']
})
export class HealthissueAddComponent {
// healthissueobj : HealthIssue[]=[];
HIobj = new HealthIssue(1,'Acute Pain','R52.0','Yes','01-03-2023','Active');
  healthissueobj: any;
  constructor(private router: Router){}
  
 // HIobj = {} as HealthIssue;

onClose(): void{
  this.router.navigate(['../HealthIssues']);
}

saveHI(data:any){
  this.healthissueobj.push(this.HIobj);
  localStorage.setItem('HIlist',JSON.stringify(this.healthissueobj));
  this.HIobj = {} as HealthIssue;
  this.router.navigate(['../HealthIssues']);
}
}
