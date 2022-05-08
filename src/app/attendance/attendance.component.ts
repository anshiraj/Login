import { Component, OnInit } from '@angular/core';
import { markInReq } from '../models/userModel/attendanceModel/markReq';
import { ApisUtilsService } from '../utils/apis-utils.service';
import { AppConstants } from '../utils/app-constants';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  latitude:string;
  longitude:string;
  date:Date;
  markType:string;
  time:string;
  locationNameAddress:string;


  constructor(private ApisUtils:ApisUtilsService) { }

  ngOnInit(): void {
  }
  markIn():void
  {
const mark:markInReq= new markInReq();
mark.Latitude=this.latitude;
mark.Longitude = this.longitude;
mark.Date=this.date;
mark.MarkType=this.markType;
mark.LocationNameAddress=this.locationNameAddress;

this.ApisUtils.mark(mark).subscribe(response=>
  {
    if(response.status=AppConstants.SUCCESS_CODE)
    {
      console.log(response.data);
    }
  })

  }

}
