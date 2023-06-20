import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HealthIssue } from 'src/HealthIssue';

@Component({
  selector: 'app-healthissue-details',
  templateUrl: './healthissue-details.component.html',
  styleUrls: ['./healthissue-details.component.css']
})
export class HealthissueDetailsComponent implements OnInit {

  hiDetailsForm!: FormGroup;
   isView: boolean | undefined;
  constructor(private router: Router,fb: FormBuilder){
    const navigation = this.router.getCurrentNavigation();
    this.isView = navigation?.extras?.state?.isView;
    //let code : string = navigation?.extras?.state?.healthIssue?.code;

    this.hiDetailsForm = fb.group({
      "Code" : navigation?.extras?.state?.healthIssue?.code,
      "Diagnosis" : navigation?.extras?.state?.healthIssue?.healthissue,
      "EnteredDate" : navigation?.extras?.state?.healthIssue?.enteredDate,
      "EnteredBy" : 'admin',
      "HIType" : 'Cronic',
      "CoadingScheme" : 'ICD-10'
    })
  }

  ngOnInit(): void {
  }
}
