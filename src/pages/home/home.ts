import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('bosh').then((bosh) => {
      this.storage.get('domain').then((domain) => {
        this.storage.get('username').then((username) => {
          this.storage.get('password').then((password) => {
            let login_details = {bosh:bosh,
                                 domain:domain,
                                 username:username,
                                 password:password}
            let login_event = new CustomEvent('login.trigger',{detail: login_details});
            document.dispatchEvent(login_event);
          }); 
        }); 
      }); 
    });  
    
    

  }

    public test() {

      console.log("mesaj");
  }

}
