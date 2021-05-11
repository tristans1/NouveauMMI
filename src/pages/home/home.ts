import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";

import { EmailComposer } from "@ionic-native/email-composer";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Logo:any = "../assets/imgs/mmi-logo.svg";
  Scroll:any = "../assets/imgs/logo-scroll.png";

  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private toast:ToastController,
    private emailComposer: EmailComposer,

    ) {}

  sendMail(){
    let email = {
      to: 'adrien.bouteiller01@gmail.com',
      cc: null,
      subject: null,
      body: null,
      isHtml:true
  };
    this.emailComposer.open(email);
    }



  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data =>{
      console.log(data);
      this.toast.create({
        message: 'Bienvenue : '+data.email,
        duration:3000
      }).present();
    })
  }
}
