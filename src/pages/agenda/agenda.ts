import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  accueil:any = "../assets/imgs/1solution1.png";
  ade:any = "../assets/imgs/1solution2.png";
  situer:any = "../assets/imgs/1solution3.png";
  EDT:any = "../assets/imgs/1solution4.png";
  store:any = "../assets/imgs/2solution0.png";
  edta:any = "../assets/imgs/2solution1.png";
  IUT:any = "../assets/imgs/2solution2.png";
  DUT:any = "../assets/imgs/2solution3.png";
  TD:any = "../assets/imgs/2solution4.png";
  TP:any = "../assets/imgs/2solution5.png";
  Valider:any = "../assets/imgs/2solution6.png";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

}
