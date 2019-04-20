import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Global } from '../../app/global';

import { AmbilBarangProsesPage } from '../ambil-barang-proses/ambil-barang-proses';
import { CekTarifPage } from '../cek-tarif/cek-tarif';

import { AlertHelper } from '../../helpers/alert-helper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = Global.title;
  constructor(
    public navCtrl: NavController,
    private alertHelp: AlertHelper
  ) {

  }

  goToAmbilBarang() {
    this.alertHelp.showAlert("Jika ingin mengakses halaman ini anda harus login","info");
    //this.navCtrl.push(AmbilBarangProsesPage);
  }

  goToCekTarif() {
    this.navCtrl.push(CekTarifPage);
  }

}
