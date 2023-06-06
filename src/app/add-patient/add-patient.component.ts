import { Component } from '@angular/core';
import { Patient } from '../patient';
import { EnrollmentService } from '../enrollment.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

   genders = ['male','female'];
  public name="";
  public email="";

   patientModel= new Patient('','ankita@gmail.com',1234567891,'');
   //constructor(private _enrollservice:EnrollmentService){}
   constructor(private http:HttpClient){}


   Onsubmit(data: any){
    console.warn(data);
  //To send data to API
    this.http.post('http://localhost:3000/SCMpatient',data).subscribe((result)=>{
      console.warn("result",data);
    })
    // this._enrollservice.enroll(this.patientModel)
    //   .subscribe(
    //     data=>console.log('Success',data),
    //     error=>console.error('Error!',error)
    //   )
   }

   OnSaveFile(data: any){
    // Data gets save in file name Patient and also gets download on click.
      let details = "Patient Name :"+data.userName +"\n Patient Email :" +data.userEmail +"\n Patient Phone :"+ data.userPhone+"\n Patient Gender :" + data.userGender;
    const file= new Blob([details],{type:"json"})
    const link=document.createElement("a");
    link.href=URL.createObjectURL(file);
    link.download= "Patient";
    link.click();
    link.remove();


   }
  }
