import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 
 modelData : any = [];

  //initlizing the observable here
 public  subdataSource = new BehaviorSubject<any>([]);
 public  userDataSource = new BehaviorSubject<any>([]);

  constructor() { 
    //emmiting th evalues for Observable
    this.modelData = JSON.parse(localStorage.getItem("db") || '[]') 
    this.subdataSource.next(this.modelData);
  }

  //setting the data for Challange/Bids etc
  setData(data: Array<any>) {
    localStorage.setItem("db",JSON.stringify(data));
    this.subdataSource.next(data);
  }

  //getting the data for Challange/Bids etc
  getData(): Observable<any> {
    return this.subdataSource.asObservable();
  }

  //setting the data for Users
  setUserData(data: Array<any>) {
    this.userDataSource.next(data);
  }

  //getting the data for users
  getUserData(): Observable<any> {
    return this.userDataSource.asObservable();
  }
  
}
