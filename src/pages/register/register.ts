import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private user = {
    email : null,
    password : null
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth:AngularFireAuth) {
  }

  async register() {
    try {
      const result = await this.afAuth.auth
        .createUserWithEmailAndPassword(this.user.email, this.user.password);
      console.log(result);
    } catch(e) {
      console.error(e);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
