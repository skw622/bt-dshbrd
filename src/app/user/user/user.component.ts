import { Component, OnInit } from '@angular/core';
import { DataPassiingService } from 'app/Services/DataPassing/data-passiing.service';
import { APIService } from 'app/API.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name

  PatientForm = new FormGroup({
    dateOfBirth: new FormControl(''),
    deviceId: new FormControl(''),
    email: new FormControl(''),
    givenNames: new FormControl(''),
    isActive: new FormControl(''),
    lastName: new FormControl(''),
    mobile: new FormControl(''),
    remarks: new FormControl(''),
  })
  deviceID: string;
  heartRate: any;
  next_token: string;
  myData1: { __typename: "HeartRate"; id: string; heartRate: number; appTimeStamp: string; }[];

  constructor(private dataSaharing: DataPassiingService, private amplify: APIService) { }

  ngOnInit() {
    this.dataSaharing.currentMessage.subscribe(msg => {
      // debugger
      if(msg !== '') {
        this.amplify.GetPatient(msg).then(data_user => {
          this.name = `${data_user.givenNames + ' ' +  data_user.lastName}`
          this.deviceID = data_user.deviceId
          this.PatientForm.controls['givenNames'].setValue(data_user.givenNames)
          this.PatientForm.controls['lastName'].setValue(data_user.lastName)
          this.PatientForm.controls['email'].setValue(data_user.email)
          this.PatientForm.controls['mobile'].setValue(data_user.mobile)
          this.PatientForm.controls['remarks'].setValue(data_user.remarks)
          this.PatientForm.controls['dateOfBirth'].setValue(data_user.dateOfBirth)
          this.PatientForm.controls['deviceId'].setValue(data_user.deviceId)

          if (data_user.isActive) {
            this.PatientForm.controls['isActive'].setValue('ACTIVE')
          }else {
            this.PatientForm.controls['isActive'].setValue('INACTIVE')
          }

          this.getData('F0:A3:74:D7:3B:92');
        }).catch(data_err => {
          debugger
        })
      }
    })

    this.amplify.OnCreateHeartRateListener.map((response: any) => {
      let message = response.value.data.onCreateHeartRate;
      return message;
    }).subscribe((amp_data: any )=> {
        debugger
        this.heartRate = amp_data.heartRate
        const data_list = {
        'heartRate': amp_data.heartRate,
        'appTimeStamp': amp_data.appTimeStamp
      }
    })
  }

  getData(dvcId) {
    // setInterval( () => {
      this.next_token = ''
      this.amplify.ListHeartRates(dvcId, null, null, 10, this.next_token).then(data => {
        debugger
        // console.log(data.nextToken)
        // debugger
        if (data.nextToken !== null) {
          this.next_token = data.nextToken
        }
        this.myData1 = data.items.reverse()
        // this.date1 = new Date(this.myData1[0].appTimeStamp)
        this.heartRate = this.myData1[0].heartRate
      })
    // }, 1000);
  }

}
