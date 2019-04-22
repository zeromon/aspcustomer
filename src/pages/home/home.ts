import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Global } from '../../app/global';

import { AmbilBarangProsesPage } from '../ambil-barang-proses/ambil-barang-proses';
import { CekTarifPage } from '../cek-tarif/cek-tarif';

import { AlertHelper } from '../../helpers/alert-helper';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = Global.title;
  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    private alertHelp: AlertHelper
  ) {

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
    this.storage.get('user').then((data:any)=>{
      if(data){
        Global.is_login = true;
        Global.user = data;
      }else{
      }
      // console.log(data);
    });
  }

  goToAmbilBarang() {
    if(!Global.is_login)
      this.alertHelp.showAlert("Jika ingin mengakses halaman ini anda harus login","info");
    else
      this.navCtrl.push(AmbilBarangProsesPage);
  }

  goToCekTarif() {
    this.navCtrl.push(CekTarifPage);
  }

}
