import { Component } from '@angular/core';
import { HealthIssue } from 'src/HealthIssue';
import { OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-health-issue',
  templateUrl: './health-issue.component.html',
  styleUrls: ['./health-issue.component.css']
})
export class HealthIssueComponent {
  healthissueobj= [
    new HealthIssue(1,'Acute Pain','R52.0','Yes','01-03-2023','Active'),
    new HealthIssue(2,'Asthma acute','J45.909','No','01-06-2022','Inactive'),
    new HealthIssue(3,'Appendix','K38.0','Yes','01-03-2023','Resolved')
  ];

}
