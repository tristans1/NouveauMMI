import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ExtraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html',
})
export class ExtraPage {
  Defi: any = "../assets/imgs/montre.svg";
  Frigotv: any = "../assets/imgs/frigo.svg";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtraPage');
  }

}
