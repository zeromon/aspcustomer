import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AmbilBarangPage } from '../ambil-barang/ambil-barang';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAmbilBarang() { 
    this.navCtrl.push(AmbilBarangPage);
  }

}
