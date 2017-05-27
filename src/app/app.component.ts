import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from 'app/providers/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;
  user: Observable<any>;

  constructor(db: AngularFireDatabase, public auth: AuthService) {
    this.items = db.list('/items', {
      query: {
        orderByValue: true
      }
    });
    this.item = db.object('/item');
    this.user = auth.getUser();
  }

  // remove(item: FirebaseObjectObservable<any>) {
  //   console.log('remove:', item);
  //   item.remove()
  //     .then(_ => console.log('success'))
  //     .catch(err => console.log('Error', err));
  // }

  setName(item: FirebaseObjectObservable<any>, newName: string) {
    console.log('set:', item, 'newname', newName);
    item.set({name: newName})
      .then(_ => console.log('success'))
      .catch(err => console.log('Error', err));
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  logout() {
    this.auth.logout();
  }
}
