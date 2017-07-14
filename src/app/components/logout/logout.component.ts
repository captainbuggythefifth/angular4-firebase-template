import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';
import { FlashMessage } from 'angular-flash-message';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router, private flashMessage: FlashMessage) { }

  ngOnInit() {

  }

  logout(){
    this.afAuth.auth.signOut();
    this.flashMessage.success("You are logged out", {
      delay: 3000,
      generalClass: 'alert alert-success',
      close: true
    });
  }

}
