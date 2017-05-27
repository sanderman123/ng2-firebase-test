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
    this.items = db.list('/items', {
      query: {
        orderByValue: true
      }
    });
    this.item = db.object('/item');
  }

  remove(item: FirebaseObjectObservable<any>) {
    console.log('remove:', item);
    item.remove()
      .then(_ => console.log('success'))
      .catch(err => console.log('Error', err));

    // item.set({'name': 'new name'})
    //   .then(_ => console.log('settings success'))
    //   .catch(err => console.log('error', err));
  }

  setName(item: FirebaseObjectObservable<any>, newName: string) {
    console.log('set:', item, 'newname', newName);
    item.set({name: newName})
      .then(_ => console.log('success'))
      .catch(err => console.log('Error', err));
  }
}
