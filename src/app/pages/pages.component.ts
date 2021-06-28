import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service.service'
import { take } from 'rxjs/operators'
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  availabeBalance: number = 0;
  dataAvailabe: any = {};
  indexs: number = 0;
  constructor(private appService: AppService) { }
  ngOnInit(): void {

    this.appService.getUserData().subscribe((newdata) => {
      newdata = JSON.parse(localStorage.getItem("allUserData") || "");
      this.indexs = newdata.map((i: any) => {
        return i.Id
      }).indexOf(JSON.parse(localStorage.getItem("UserDB") || "").Id);
      this.dataAvailabe = newdata[this.indexs];
      this.appService.getData().pipe(
        take(1)
      ).subscribe((data: any) => {
        data.map((items: any) => {
          for (let a = 0; a < items.Bids.length; a++) {
            if (items.Bids[a].UserId == JSON.parse(localStorage.getItem("UserDB") || "").Id) {
              this.dataAvailabe.AccountBalance = this.dataAvailabe.AccountBalance - items.Bids[a].BidPrice;
            }
          }
        }
        )
      });
    })


  }

  getUserData() {


  }
}
