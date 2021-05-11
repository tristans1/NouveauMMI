import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProfesseurPage } from '../pages/professeur/professeur';
import { WifiPage } from "../pages/wifi/wifi";
import { AgendaPage } from '../pages/agenda/agenda';

import { LoginPage } from "../pages/login/login";
import {FaqPage} from "../pages/faq/faq";
import {ExtraPage} from "../pages/extra/extra";

// import {RegisterPage} from "../pages/register/register";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
      { title: 'F.A.Q', component: FaqPage},
      { title: 'Professeurs', component: ProfesseurPage },
      { title: 'Comment se connecter au wifi ?', component: WifiPage },
      { title: 'Agenda', component: AgendaPage },
      { title: 'Extras', component: ExtraPage},
      { title: 'Déconnexion', component: LoginPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
