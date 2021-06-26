import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {AppService} from '../../../service/app.service.service';
import { Observable,Subscription} from 'rxjs';
import { first, take } from 'rxjs/operators';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  allProduct:   Array<any> = [];
  unsub:any=Subscription;
  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public appService: AppService
  ) { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.data))
  }
  no(){
    this.dialogRef.close()
  }

  action(idx:number){
    console.log(idx)
    this.unsub = this.appService.getData().pipe(
      take(1),
    ).subscribe((data:any)=> {
      
      this.setvaluesToDB(data,this.data.id)
      
    });
    
    // this.allProduct[this.data.id]
    console.log(idx) // this will have url and other details whatever you send from calling parent
  }

  setvaluesToDB(newdata:any,idx:number){
      console.log("calling....")
      const indexOfUser =newdata[idx].Bids?.map((d:any)=>{
        return d.UserId
      }).indexOf(JSON.parse(localStorage.getItem("UserDB") || "").Id);
      if(indexOfUser >= 0){
        newdata[idx].Bids[indexOfUser].BidPrice = this.data.data;
      }else{
      newdata[idx].Bids.push({
        "Id":newdata[idx].Bids.length,
        "UserId":JSON.parse(localStorage.getItem("UserDB") || "").Id,
        "ItemId":newdata[idx].Id,
        "BidPrice": this.data.data
      });
    }
      this.appService.setData(newdata);
      this.no();
      
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
  }
}
