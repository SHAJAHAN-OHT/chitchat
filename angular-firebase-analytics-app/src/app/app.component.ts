import { Component, AfterViewInit } from '@angular/core';

// import * as firebase from 'firebase/app';
// import * as firebase from 'firebase/analytics'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-firebase-analytics-app';

  
  ngAfterViewInit(){


    // firebase.analytics().logEvent("eventname",{
    //   'firsttimeuser' : true,
    //   'username' :'shajahan'
    // })
  }
}
