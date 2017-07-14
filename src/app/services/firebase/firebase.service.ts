import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  properties: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireDatabase) {

  }

  getProperties(){
    this.properties = this.af.list('/properties') as FirebaseListObservable<Properties[]>;
    return this.properties;
  }

  getProperty(id){

  }
}

interface Properties{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}
