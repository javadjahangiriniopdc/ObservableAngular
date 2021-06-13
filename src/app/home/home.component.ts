import { Component, OnInit } from '@angular/core';
import {interval, Observable, Observer, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public intervalSubscription: Subscription;
  constructor() { }


  ngOnInit(): void {
    const interval$=interval(1000);
    // const interval$=new Observable((observer:Observer<number>) =>{
    //   let count=0;
    //   setInterval(()=>{
    //     observer.next(count++);
    //     if(count===5){
    //       observer.error(new Error('we reached 5!'))
    //     }
    //   },1000);
    // });
   this.intervalSubscription=interval$.subscribe(
      (value) => {
        console.log(value)}
    )
  }

}
