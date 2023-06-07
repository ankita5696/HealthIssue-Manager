import { Component } from '@angular/core';
import { HealthIssue } from 'src/HealthIssue';
import { OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-health-issue',
  templateUrl: './health-issue.component.html',
  styleUrls: ['./health-issue.component.css']
})
export class HealthIssueComponent {
 healthissueobj= new HealthIssue(1,'Acute Pain','R52.0','Yes','01-03-2023','Active');

}
