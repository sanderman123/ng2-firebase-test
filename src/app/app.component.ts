import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
    this.item = db.object('/item');
  }
}
