import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 
 modelData : any = [];

  public  subdataSource = new BehaviorSubject<any>([]);

  constructor() { 
   
    this.modelData = JSON.parse(localStorage.getItem("db") || '[]') 
    this.subdataSource.next(this.modelData);
  }

  setData(data: Array<any>) {
    console.log("set data to DB===>"+JSON.stringify(data))
    localStorage.setItem("db",JSON.stringify(data));
    this.subdataSource.next(data);
  }

  getData(): Observable<any> {
    return this.subdataSource.asObservable();
  }
  
}
