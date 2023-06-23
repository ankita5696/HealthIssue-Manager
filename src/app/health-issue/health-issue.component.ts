import { Component } from '@angular/core';
import { HealthIssue } from 'src/HealthIssue';
import { OnInit, TemplateRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-health-issue',
  templateUrl: './health-issue.component.html',
  styleUrls: ['./health-issue.component.css']
})

export class HealthIssueComponent implements OnInit{
   highlightRow : any;
   ClickedRow:any;
   healthIssueForm!: FormGroup;
   isView!: boolean;

  constructor(private router: Router){
    this.ClickedRow = function(index: Number,isView: boolean){
      this.highlightRow = index;
      this.isView = isView;
      this.onHIDetails(this.highlightRow, this.isView);
  }
  }

  onHIDetails(healthissueID: number, isView: boolean) {
    let healthIssue:HealthIssue ;
    //isView = true;
    healthIssue = this.healthissueobj.find(x => x.id === healthissueID +1 )!;//this.healthissueobj.find(hi=>hi.id = healthissueID + 1)!;
    let navigationExtras: NavigationExtras = {
      state: {
        healthIssue,
        isView
        },
      };
    this.router.navigate(['../HealthIssueDetails'],navigationExtras);
  }

  healthissueobj= [
    new HealthIssue(1,'Acute Pain','R52.0','Yes','01-03-2023','Active'),
    new HealthIssue(2,'Asthma acute','J45.909','No','01-06-2022','Inactive'),
    new HealthIssue(3,'Appendix','K38.0','Yes','01-03-2023','Resolved')
  ];

ngOnInit():void{
  const localdata= localStorage.getItem('HIlist');
  if(localdata!=null){
    this.healthissueobj= JSON.parse(localdata);
  }
  else{
    localStorage.setItem('HIlist',JSON.stringify(this.healthissueobj));
  }
}


 // healthissueobj : HealthIssue[]=[];
 public HIobj = new HealthIssue(1,'Acute Pain','R52.0','Yes','01-03-2023','Active');
  display1 = false;
  saveHI(data:any){
    this.healthissueobj.push(this.HIobj);
    localStorage.setItem('HIlist',JSON.stringify(this.healthissueobj));
    this.HIobj = {} as HealthIssue;
  }
  onAdd(){
    this.display1 = false;
    this.router.navigate(['../HealthIssueAdd']);
  }
}
