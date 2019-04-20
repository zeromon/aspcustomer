import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Global } from '../../app/global';

import { AmbilBarangProsesPage } from '../ambil-barang-proses/ambil-barang-proses';

/**
 * Generated class for the AmbilBarangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ambil-barang',
  templateUrl: 'ambil-barang.html',
})
export class AmbilBarangPage {
  title = Global.title;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AmbilBarangPage');
  }

  prosesAmbilBarang() { 
    // this.navCtrl.push(AmbilBarangProsesPage);
  }

}
