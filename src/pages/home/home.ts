import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Global } from '../../app/global';

import { AmbilBarangProsesPage } from '../ambil-barang-proses/ambil-barang-proses';
import { CekTarifPage } from '../cek-tarif/cek-tarif';
import { RiwayatPage } from '../riwayat/riwayat';

import { Api } from '../../providers/api/api';
import { AlertHelper } from '../../helpers/alert-helper';
import { LoadingHelper } from '../../helpers/loading-helper';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = Global.title;
  nama: string;
  no_telp;
  psw;
  ulangpsw;
  nama_login;
  psw_login;
  user: any;
  is_login = Global.is_login;
  constructor(
    public navCtrl: NavController,
    private api: Api,
    private storage: Storage,
    private alertHelp: AlertHelper,
    private loadHelp: LoadingHelper,
  ) {

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
    this.storage.get('user').then((data: any) => {
      if (data) {
        Global.is_login = true;
        Global.user = data;
      } else {
      }
      // console.log(data);
    });
  }

  goToAmbilBarang() {
    if (!Global.is_login)
      this.alertHelp.showAlert("Jika ingin mengakses halaman ini anda harus login", "info");
    else
      this.navCtrl.push(AmbilBarangProsesPage);
  }

  goToRiwayat() {
    if (!Global.is_login)
      this.alertHelp.showAlert("Jika ingin mengakses halaman ini anda harus login", "info");
    else
      this.navCtrl.push(RiwayatPage);
  }

  goToCekTarif() {
    this.navCtrl.push(CekTarifPage);
  }

  daftar() {
    let data = {
      nama: this.nama,
      psw: this.psw,
      no_telp: this.no_telp,
    }

    this.loadHelp.showLoading("Tunggu");
    this.api.post("register", data).subscribe((res: any) => {
      this.loadHelp.dismissLoading();
      if (res == "success") {
        this.alertHelp.showAlert("Berhasil daftar");
        this.reset();
      } else {
        this.alertHelp.showAlert("gagal daftar");
      }
    }, (error: any) => {
      this.loadHelp.dismissLoading();
      console.log(error);
    });
  }

  login() {
    let data = {
      nama: this.nama_login,
      psw: this.psw_login
    };
    this.loadHelp.showLoading("Tunggu");
    this.api.post("login", data).subscribe((res: any) => {
      if (res != 'failed') {
        this.loadHelp.dismissLoading();
        this.is_login = true;
        Global.is_login = this.is_login;
        this.user = res;
        Global.user = this.user;
        // set user in storage
        this.storage.set('user', this.user);
      }else{
        this.loadHelp.dismissLoading();
        this.alertHelp.showAlert("Gagal login username dan password tidak sesuai", 'Info');
      }
    }, (error: any) => {
      this.loadHelp.dismissLoading();
      this.alertHelp.showAlert("Terjadi error pada server", "info");
    });
  }

  logout() {
    this.storage.clear();
    this.is_login = false;
    Global.is_login = this.is_login;
  }

  reset() {
    this.nama = '';
    this.psw = '';
    this.no_telp = '';
    this.ulangpsw = '';
  }

}
