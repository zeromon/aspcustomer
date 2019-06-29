import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// local storage ionic

import { IonicStorageModule } from '@ionic/storage';

import { AlertHelper } from '../helpers/alert-helper';
import { LoadingHelper } from '../helpers/loading-helper';

import { Api } from '../providers/api/api';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AmbilBarangPage } from '../pages/ambil-barang/ambil-barang';
import { AmbilBarangProsesPage } from '../pages/ambil-barang-proses/ambil-barang-proses';
import { CekTarifPage } from '../pages/cek-tarif/cek-tarif';
import { RiwayatPage } from '../pages/riwayat/riwayat';
import { LacakKirimanPage } from '../pages/lacak-kiriman/lacak-kiriman';
import { LupaPswPage } from '../pages/lupa-psw/lupa-psw';
import { DetailPengirimanPage } from '../pages/detail-pengiriman/detail-pengiriman';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    AmbilBarangPage,
    AmbilBarangProsesPage,
    CekTarifPage,
    RiwayatPage,
    LacakKirimanPage,
    LupaPswPage,
    DetailPengirimanPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonIcon: 'ios-arrow-back',
    }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    AmbilBarangPage,
    AmbilBarangProsesPage,
    CekTarifPage,
    RiwayatPage,
    LacakKirimanPage,
    LupaPswPage,
    DetailPengirimanPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    Api,
    AlertHelper,
    LoadingHelper,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
