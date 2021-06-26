import { Component, OnInit } from '@angular/core';
import {AppService} from '../../service/app.service.service';
import { ActivatedRoute } from '@angular/router';
import {AlertComponent} from '../../shared-components/shared-components/alert/alert.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
 product:any;
 subscription: any = Subscription;

  constructor(private appService: AppService,private route : ActivatedRoute, public dialog:MatDialog) { }

  ngOnInit(): void {
  this.subscription =this.appService.getData().subscribe(data=> {this.product =  data});
  }
getProductDetail(){
  return this.product[this.route.snapshot.params.id];
}
makeaBid(bid:Array<any>){
  console.log("getting pop up data"+bid);
  // if(bid.length === 0){
    
  // }
  let msg : any = '';
   msg= {
    "alertHeader":"Hit a Bid",
    "data":bid.length > 0 ? bid[0].BidPrice : 0,
    "id":this.route.snapshot.params.id
  }
  console.log()
  this.dialog.open(AlertComponent,{
    data:msg,
    width: '700px'
  });


}

ngOnDestroy() {
  // unsubscribe to ensure no memory leaks
  this.subscription.unsubscribe();
}
}
