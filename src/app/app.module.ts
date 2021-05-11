import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfesseurPage } from '../pages/professeur/professeur';
import { WifiPage } from "../pages/wifi/wifi";
import { AgendaPage } from "../pages/agenda/agenda"
import { FaqPage} from "../pages/faq/faq";
import {ExtraPage} from "../pages/extra/extra";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";

import { EmailComposer } from "@ionic-native/email-composer";
import { File } from "@ionic-native/file";


import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCofunSKyRugBaPxwMumFH0vh5P1QaknQA",
  authDomain: "fir-ionic-e4fd3.firebaseapp.com",
  databaseURL: "https://fir-ionic-e4fd3-default-rtdb.firebaseio.com",
  projectId: "fir-ionic-e4fd3",
  storageBucket: "fir-ionic-e4fd3.appspot.com",
  messagingSenderId: "389239162810",
  appId: "1:389239162810:web:9e2a092b221ce82cbf3f83",
  measurementId: "G-3260PBZGQQ"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfesseurPage,
    WifiPage,
    AgendaPage,
    LoginPage,
    RegisterPage,
    FaqPage,
    ExtraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfesseurPage,
    WifiPage,
    AgendaPage,
    LoginPage,
    RegisterPage,
    FaqPage,
    ExtraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
