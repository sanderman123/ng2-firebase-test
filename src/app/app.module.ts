import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCoRfidXM4HFAV3OKUTzJP2ZDVzgTEOouQ',
  authDomain: 'ngfbauth-628cf.firebaseapp.com',
  databaseURL: 'https://ngfbauth-628cf.firebaseio.com',
  projectId: 'ngfbauth-628cf',
  storageBucket: 'ngfbauth-628cf.appspot.com',
  messagingSenderId: '874018556575'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
