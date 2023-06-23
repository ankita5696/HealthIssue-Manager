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
HIobj ={} as HealthIssue;
  healthissueobj: any;
  constructor(private router: Router){}
  
 // HIobj = {} as HealthIssue;
 ngOnInit():void{
  const localdata= localStorage.getItem('HIlist');
  if(localdata!=null){
    this.healthissueobj= JSON.parse(localdata);
  }
  
}
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
