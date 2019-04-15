import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Global } from '../../app/global';

import { AmbilBarangPage } from '../ambil-barang/ambil-barang';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = Global.title;
  constructor(public navCtrl: NavController) {

  }

  goToAmbilBarang() {
    this.navCtrl.push(AmbilBarangPage);
  }

}
