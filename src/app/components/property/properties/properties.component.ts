import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../services/firebase/firebase.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  properties: any;

  ngOnInit() {
    this.firebaseService.getProperties().subscribe(properties => {
      console.log(properties);
      this.properties = properties;
    })
  }

}
