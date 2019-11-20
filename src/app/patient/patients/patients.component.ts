import { Component, OnInit } from '@angular/core';
import { APIService } from 'app/API.service';
// import * as queries from '../../graphql/queries'
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataPassiingService } from 'app/Services/DataPassing/data-passiing.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  gridData: any[] = []
  public value: Date
  patient_Add: boolean = true;
  patient_Edit: boolean = false;
  
  patientForm = new FormGroup({
    Status: new FormControl(true),
    givenName: new FormControl(''),
    lastName: new FormControl(''),
    Email: new FormControl(''),
    Mobile: new FormControl(''),
    Remarks: new FormControl(''),
    dateOfBirth: new FormControl(''),
    DeviceID: new FormControl(''),
    Address: new FormControl('Test')
  })
  id: any;
  
  constructor(private amplify: APIService, private router: Router, private DataSharing: DataPassiingService) { }

  ngOnInit() {
    this.value = new Date(2000, 2, 10);
    this.getPatients()
    // this.addPatient();
  }

  getPatients() {
    this.amplify.ListPatients().then(patients_data => {
      console.log(patients_data)
      this.gridData = patients_data.items
    }).catch(patinet_err => {
      debugger
      // window.alert('error')
    })
  }

  adding() {
    this.patientForm.reset();
    this.patient_Add = true
    this.patient_Edit = false
  }

  edit() {
    // debugger
    this.patient_Edit = true
    this.patient_Add = false
  }

  public editHandler({sender, rowIndex, dataItem}) {
    debugger
    this.id = dataItem.id
    this.patientForm.controls['givenName'].setValue(dataItem.givenNames)
    this.patientForm.controls['lastName'].setValue(dataItem.lastName)
    this.patientForm.controls['Email'].setValue(dataItem.email)
    this.patientForm.controls['Mobile'].setValue(dataItem.mobile)
    this.patientForm.controls['Remarks'].setValue(dataItem.remarks)
    this.patientForm.controls['dateOfBirth'].setValue(dataItem.dateOfBirth)
    this.patientForm.controls['Status'].setValue(dataItem.isActive)
    this.patientForm.controls['DeviceID'].setValue(dataItem.deviceId)
    this.edit()
  }

  addPatient(form) {
    // this.patientForm.reset();
    const data = {
          // Status: form.value.Status,
          lastName: form.value.lastName,
          givenNames: form.value.givenName,
          email: form.value.Email,
          mobile: form.value.Mobile,
          dateOfBirth: form.value.dateOfBirth,
          deviceId: form.value.DeviceID,
          isActive: form.value.Status,
          remarks: form.value.Remarks,
    }
    this.amplify.CreatePatient(data).then(data_p => {
      // debugger
      this.getPatients()
      this.patientForm.reset();
    }).catch(data_err => {
      window.alert('Error')
    })
  }

  editPatient(form) {
    this.id
    const data = {
      id: this.id,
      lastName: form.value.lastName,
      givenNames: form.value.givenName,
      email: form.value.Email,
      mobile: form.value.Mobile,
      dateOfBirth: form.value.dateOfBirth,
      deviceId: form.value.DeviceID,
      isActive: form.value.Status,
      remarks: form.value.Remarks,
    }
    this.amplify.UpdatePatient(data).then(update_data => {
      this.getPatients();
      this.patientForm.reset();
    }).catch(update_error => {
      window.alert('Error')
    })
  } 


  public addHandler(id) {
    this.DataSharing.changeMessage(id)
    this.router.navigate(['/user/profile'])
  }

  addP(){
    debugger
    this.patientForm.reset();
  }
}
