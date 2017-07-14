import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { FlashMessageModule } from 'angular-flash-message';


/* Angular Fire */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'
import { environment } from './environment/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PropertiesComponent } from './components/property/properties/properties.component';
import { PropertyComponent } from './components/property/property/property.component';
import { AddPropertyComponent } from './components/property/add-property/add-property.component';
import { EditPropertyComponent } from './components/property/edit-property/edit-property.component';

/*Services*/
import { FirebaseService } from './services/firebase/firebase.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'add', component: AddPropertyComponent },
  { path: 'property/:id', component: PropertyComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PropertiesComponent,
    PropertyComponent,
    AddPropertyComponent,
    EditPropertyComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FlashMessageModule
  ],
  providers: [
    FirebaseService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
