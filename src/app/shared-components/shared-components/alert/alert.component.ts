import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from '../../../service/app.service.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  allProduct: Array<any> = [];
  unsub: any = Subscription;
  msgFlag: boolean = false;
  msgData: string = "";
  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public appService: AppService
  ) { }

  ngOnInit(): void {
  }
  no() {
    this.dialogRef.close()
  }

  action(idx: number) {
    this.unsub = this.appService.getData().pipe(
      take(1),
    ).subscribe((data: any) => {
      this.setvaluesToDB(data, this.data.id)
    });
  }

  setvaluesToDB(newdata: any, idx: number) {

    let actuallySpent = this.data.data;
    const indexOfUser = newdata[idx].Bids?.map((d: any) => {
      return d.UserId
    }).indexOf(JSON.parse(localStorage.getItem("UserDB") || "").Id);
    if (newdata[idx].Bids[indexOfUser]?.BidPrice == this.data.data) {
      this.no();
      return;
    }
    if (indexOfUser >= 0) {
      actuallySpent = Math.abs(newdata[idx].Bids[indexOfUser].BidPrice - this.data.data);
      newdata[idx].Bids[indexOfUser].BidPrice = this.data.data;
    } else {
      newdata[idx].Bids.push({
        "Id": newdata[idx].Bids.length,
        "UserId": JSON.parse(localStorage.getItem("UserDB") || "").Id,
        "ItemId": newdata[idx].Id,
        "BidPrice": this.data.data
      });
    }
    this.appService.setData(newdata);
    if (JSON.parse(localStorage.getItem("UserDB") || "").AccountBalance - actuallySpent < 0) {
      alert("Your Account balance is low for this bid!")
      this.msgFlag = true;
      this.msgData = "Your Account balance is low for this bid!"
      return;
    } else {
      this.msgFlag = false;
    }
    const data = JSON.parse(localStorage.getItem("allUserData") || "");
    const indexs = data.map((i: any) => {
      return i.Id
    }).indexOf(JSON.parse(localStorage.getItem("UserDB") || "").Id);
    data[indexs].AccountBalance = JSON.parse(localStorage.getItem("UserDB") || "").AccountBalance - actuallySpent;
    localStorage.setItem("UserDB", JSON.stringify(data[indexs]));
    this.appService.setUserData(data);
    this.no();

  }

}
