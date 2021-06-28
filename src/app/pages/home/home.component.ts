import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service.service'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProduct!: Observable<any>
  //while adding the type we can use interface or directly provide the type [{"Id":number,"Name":string,"BasePrice":number}]
  //If you are changing any data from the any locally stored object ,You suppose to to logout and login again.
  products: Array<any> = [
    { "Id": 1, "Name": "Rolls-Royce Phantom", "BasePrice": 100, "Make": 2020, "Image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rr-phantom-viii-16-1501184786.jpg?crop=1xw:1xh;center,top&resize=480:*", "Bids": [], "Challenge": { "StartTime": "2021-06-24 2:30", "EndTime": "2021-06-30 2:30" } },
    { "Id": 2, "Name": "Rolls-Royce Dawn", "BasePrice": 100, "Make": 2021, "Image": "https://hips.hearstapps.com/roa.h-cdn.co/assets/16/24/1600x800/landscape-1466350630-roa070116dpt-drives-rolls-02.jpg?resize=480:*", "Bids": [], "Challenge": { "StartTime": "2021-06-22 2:30", "EndTime": "2021-06-29 2:30" } },
    { "Id": 3, "Name": "Rolls-Royce Wraith", "BasePrice": 100, "Make": 2018, "Image": "https://hips.hearstapps.com/roa.h-cdn.co/assets/16/01/1280x640/landscape-1452201739-rolls-royce-wraith-2014-1600x1200-wallpaper-01.jpg?resize=480:*", "Bids": [], "Challenge": { "StartTime": "2021-06-23 2:30", "EndTime": "2021-06-26 12:30" } },
    { "Id": 4, "Name": "Rolls-Royce Cullinan", "BasePrice": 100, "Make": 2019, "Image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cullinan-magma-red-ext-4-1525901623.jpg?crop=1xw:1xh;center,top&resize=480:*", "Bids": [], "Challenge": { "StartTime": "2021-06-02 2:30", "EndTime": "2021-06-12 2:30" } },
    { "Id": 5, "Name": "Rolls-Royce Ghost", "BasePrice": 100, "Make": 2020, "Image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg?crop=1xw:1xh;center,top&resize=480:*", "Bids": [], "Challenge": { "StartTime": "2021-06-25 2:30", "EndTime": "2021-06-27 23:30" } },
    { "Id": 6, "Name": "Bentley Flying Spur", "BasePrice": 100, "Make": 2021, "Image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-bentley-flying-spur-3-1560256771.jpg?crop=1xw:1xh;center,top&resize=480:*", "Bids": [], "Challenge": { "StartTime": "2021-06-26 2:30", "EndTime": "2021-06-29 22:30" } },
    { "Id": 7, "Name": "Bentley Continental GT", "BasePrice": 100, "Make": 2021, "Image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/roa080118dpt-drives-continentalgt-06-1534221675.jpg?crop=0.754xw:0.779xh;0,0.221xh&resize=480:*", "Bids": [], "Challenge": { "StartTime": "2021-06-21 2:30", "EndTime": "2021-06-25 21:30" } },
    { "Id": 8, "Name": "Range Rover SV Autobiography", "BasePrice": 100, "Make": 2019, "Image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rr185mysvalwbonroad28111704-1521464394.jpg?crop=0.636xw:0.874xh;0.364xw,0.126xh&resize=480:*", "Bids": [], "Challenge": { "StartTime": "2021-06-26 2:30", "EndTime": "2021-06-29 15:30" } }
  ];

  constructor(private appService: AppService, private route: Router) { }

  ngOnInit(): void {
    //loading the initial data 
    if (!localStorage.getItem("db")) {
      localStorage.setItem("db", JSON.stringify(this.products));
    }
    //emmiting the data so that Subscribed methods could get the data stream.
    this.appService.setData(JSON.parse(localStorage.getItem("db") || '[]'));
    this.allProduct = this.appService.getData();
  }
  goForBidding(idx: number) {
//condition to let the user enter to the challange, if user between the StartTime and End Time 
    var startDate = new Date(this.products[idx].Challenge.StartTime);
    var endDate = new Date(this.products[idx].Challenge.EndTime);
    var currentDate = new Date();
    if (currentDate > startDate && currentDate < endDate) {
      this.route.navigate(['home/product', idx]);
    } else {
      if (currentDate < startDate) {
        alert("Bid for this product is not started Yet.Please wait.")
      } else {
        alert("Sorry,This Bid is not live.");
      }

    }

  }

  //Method to show the green and red indicator for the status of the Product/Challange.
  status(id: number) {
    const startDate = new Date(String(this.products[id].Challenge.StartTime));
    const endDate = new Date(String(this.products[id].Challenge.EndTime));
    const currentDate = new Date();
    if (currentDate > startDate && currentDate < endDate) {
      this.products[id].Challenge.status = true;
      return true;
    } else {
      this.products[id].Challenge.status = false;
      return false;
    }
  }
}

