import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfesseurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-professeur',
  templateUrl: 'professeur.html',
})
export class ProfesseurPage {
  Jmfino:any = "../assets/imgs/fino.png";
  Xaviersenente:any = "../assets/imgs/senente.png";
  Malsot:any = "../assets/imgs/malsot.png";
  Alain:any = "../assets/imgs/durand.png";
  Chatonnay:any = "../assets/imgs/chaton.png";
  Bloch:any = "../assets/imgs/bloch.png";
  Lydia:any = "../assets/imgs/dubois.png";
  Florentz:any = "../assets/imgs/florentz.jpg";
  Pracht:any = "../assets/imgs/pracht.png";
  Laurent:any = "../assets/imgs/laurent.png";
  Virgini:any = "../assets/imgs/virgini.jfif";
  Domenget:any = "../assets/imgs/domenget.png";
  Canalda:any = "../assets/imgs/canalda.png";
  Bodet:any = "../assets/imgs/bodet.png";
  Augier:any = "../assets/imgs/augier.png";
  Henriet: any = "../assets/imgs/henriet.png";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfesseurPage');
  }

}
