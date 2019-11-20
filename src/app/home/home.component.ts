import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { APIService } from 'app/API.service';
// import * as queries from '../../graphql/queries'
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gridData: any[] 

  myData1: any = [];
  myData: any;
  myData2: any = [];
  myData3: any = [];
  data_1: any;
  next_token: any
  filter: any
  number: any
  date: Date;
  subscription: any
  date1: any
  date2: any
  date3: any
  d_date1
  d_date2
  d_date3
  rate1
  rate2
  rate3
  DeviceId1 = 'F0:A3:74:D7:3B:92'
  DeviceId2
  DeviceId3
  track1 = false
  track2 = false
  track3 = false

  FGroup1 = new FormGroup({
    formF1: new FormControl(this.DeviceId1)
  })

  FGroup2 = new FormGroup({
    formF2: new FormControl('')
  })

  FGroup3 = new FormGroup({
    formF3: new FormControl('')
  })

  constructor(private amplify: APIService) { }

  ngOnInit() {
    this.gridData = products;

    this.getData(this.DeviceId1);
    this.amplify.OnCreateHeartRateListener.map((response: any) => {
      let message = response.value.data.onCreateHeartRate;
      return message;
    }).subscribe((amp_data: any )=> {
        const data_list = {
        'heartRate': amp_data.heartRate,
        'appTimeStamp': amp_data.appTimeStamp
      }
      this.rate1 = amp_data.heartRate
      this.date1 = amp_data.appTimeStamp
      this.myData1.push(data_list)
      this.myData1 = this.myData1.reverse()
    })
    // this.amplify.OnCreateHeartRateListener(this.DeviceId1)
    // .map((response: any) => {
    //   debugger
    //   let message = response.value.data.onCreateHeartRate;
    //   return message;
    // })
    // .subscribe((amp_Data: any) => {
    //   debugger
    //   console.log(amp_Data)
    //   const data_list = {
    //     'heartRate': amp_Data.heartRate,
    //     'appTimeStamp': amp_Data.appTimeStamp
    //   }
    //   this.rate1 = amp_Data.heartRate
    //   this.date1 = amp_Data.appTimeStamp
    //   this.myData1.push(data_list)
    //   this.myData1 = this.myData1.reverse()
    // })
  }

  connect(): void {
    const source = new EventSource('https://btapi.preventechws.com/ble/sse_test?test-duration=5');
    source.addEventListener('message', message => {
      this.myData = JSON.parse(message['data']);
      // console.log(message)
      this.data_1 = this.myData.heart_rate
    });
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
        this.date1 = new Date(this.myData1[0].appTimeStamp)
        this.rate1 = this.myData1[0].heartRate
      })
    // }, 1000);
  }

  getData2(dvcId) {
    this.next_token = ''
    this.amplify.ListHeartRates(dvcId, null, null, 10, this.next_token).then(data => {
      // console.log(data.nextToken)
      if (data.nextToken !== null) {
        this.next_token = data.nextToken
      }
      this.myData2 = data.items.reverse()
      this.date2 = new Date(this.myData2[0].appTimeStamp)
      this.rate2 = this.myData2[0].heartRate
    })
  }

  getData3(dvcId) {
    this.next_token = ''
    this.amplify.ListHeartRates(dvcId, null, null, 10, this.next_token).then(data => {
      // console.log(data.nextToken)
      if (data.nextToken !== null) {
        this.next_token = data.nextToken
      }
      this.myData3 = data.items.reverse()
      this.date3 = new Date(this.myData3[0].appTimeStamp)
      this.rate3 = this.myData3[0].heartRate
    })
  }

  formOneClick(form1) {

    // this.amplify.OnCreateHeartRateListener
    // debugger
    this.track1 = true
    this.getData(form1.value.formF1)
    // this.amplify.OnCreateHeartRateListener(this.DeviceId1).unsubscribe()
    this.amplify.OnCreateHeartRateListener(form1.value.formF1)
    .map((response: any) => {
      let message = response.value.data.onCreateHeartRate;
      return message;
    })
    .subscribe((amp_Data: any) => {
      // console.log(amp_Data)
      const data_list = {
        'heartRate': amp_Data.heartRate,
        'appTimeStamp': amp_Data.appTimeStamp
      }
      this.rate1 = amp_Data.heartRate
      this.date1 = amp_Data.appTimeStamp
      this.myData1.push(data_list)
      this.myData1 = this.myData1.reverse()
    })
    
  }

  formTwoClick(form2) {
    this.track2 = true
    // this.getData2(form2.value.formF2)
    this.getData2(form2.value.formF2)
    this.amplify.OnCreateHeartRateListener(form2.value.formF2)
    .map((response: any) => {
      let message = response.value.data.onCreateHeartRate;
      return message;
    })
    .subscribe((amp_Data: any) => {
      // console.log(amp_Data)
      const data_list = {
        'heartRate': amp_Data.heartRate,
        'appTimeStamp': amp_Data.appTimeStamp
      }
      this.rate2 = amp_Data.heartRate
      this.date2 = amp_Data.appTimeStamp
      this.myData2.push(data_list)
      this.myData2 = this.myData2.reverse()
    })
  }

  formThreeClick(form3) {
    this.track3 = true
    this.getData3(form3.value.formF3)
    this.amplify.OnCreateHeartRateListener(form3.value.formF3)
    .map((response: any) => {
      let message = response.value.data.onCreateHeartRate;
      return message;
    })
    .subscribe((amp_Data: any) => {
      // console.log(amp_Data)
      const data_list = {
        'heartRate': amp_Data.heartRate,
        'appTimeStamp': amp_Data.appTimeStamp
      }
      this.rate3 = amp_Data.heartRate
      this.date3 = amp_Data.appTimeStamp
      this.myData3.push(data_list)
      this.myData3 = this.myData3.reverse()
    })
  }


}
