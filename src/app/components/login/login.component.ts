import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Router } from '@angular/router';
import { FlashMessage } from 'angular-flash-message';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router, private flashMessage: FlashMessage) { }

  ngOnInit() {
    this.user = this.afAuth.authState;
  }

  loginWithFacebook(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then((success) => {
          console.log("SUCCESS LOGIN WITH FACEBOOK", success);
          this.router.navigateByUrl('/properties');
        })
        .catch((error) => {
          this.error = error;
        })
  }

  loginWithGoogle(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((success) => {
          console.log("SUCCESS LOGIN WITH GOOGLE", success);
          this.router.navigateByUrl('/properties');
        })
        .catch((error) => {
          this.error = error;
        })
  }
}
