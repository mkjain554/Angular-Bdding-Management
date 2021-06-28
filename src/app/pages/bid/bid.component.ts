import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service.service';
import { ActivatedRoute } from '@angular/router';
import { AlertComponent } from '../../shared-components/shared-components/alert/alert.component'
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',  
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  product: any;
  subscription: any = Subscription;
  parmId: number = 0;
  constructor(private appService: AppService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription = this.appService.getData().subscribe(data => { this.product = data });
    this.parmId = this.route.snapshot.params.id;
  }

  //get the specific Product detail.
  getProductDetail() {
    return this.product[this.parmId];
  }

  //this function is use to get the CurrentBid price of a specific user.
  getProductDetailBidPrice() {
    if (this.product[this.parmId].Bids?.length > 0) {
      return this.product[this.parmId].Bids[this.product[this.parmId].Bids?.map((s: any) => {
        return s.UserId;
      }).indexOf(JSON.parse(localStorage.getItem("UserDB") || "").Id)]?.BidPrice || 0;
    } else {
      return 0;
    }
  }

  //This method is used to open the popup for bidding.
  makeaBid(bid: number) {
    //we can sent additional data into the data parm of material dialog.
    let msg: any = '';
    msg = {
      "alertHeader": "Hit a Bid",
      "data": bid,
      "id": this.route.snapshot.params.id
    }
    this.dialog.open(AlertComponent, {
      data: msg,
      width: '700px'
    });


  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
