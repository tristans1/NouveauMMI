import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RegisterPage } from "../register/register";
import { HomePage } from "../home/home";
import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private user = {
    email: null,
    password: null
  }
  Gif:any = "../assets/vid/home.gif";


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth) {
  }

  async login() {
    try{
    const result = await this.afAuth.auth
      .signInWithEmailAndPassword(this.user.email, this.user.password);
    console.log(result);
    if (result) {
      this.navCtrl.push(HomePage);
    }
    }
    catch(e){
      console.error(e);
  }
}

        register(){
          this.navCtrl.push(RegisterPage);
        }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
