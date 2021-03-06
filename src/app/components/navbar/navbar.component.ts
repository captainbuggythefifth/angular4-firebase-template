import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  error: any;
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.user = this.afAuth.authState;
  }
}
