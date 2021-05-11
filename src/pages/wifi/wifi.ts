import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WifiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wifi',
  templateUrl: 'wifi.html',
})
export class WifiPage {
  etape1:any = "../assets/imgs/etape1.png";
  etape2:any = "../assets/imgs/etape2.png";
  etape3:any = "../assets/imgs/etape3.png";
  etape4:any = "../assets/imgs/etape4.png";
  etape5:any = "../assets/imgs/etape5.png";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WifiPage');
  }

}
