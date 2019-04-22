import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Global } from '../../app/global';

import { Api } from '../../providers/api/api';

import { AlertHelper } from '../../helpers/alert-helper';
import { LoadingHelper } from '../../helpers/loading-helper';
//import { AmbilBarangPage } from '../ambil-barang/ambil-barang';

/**
 * Generated class for the AmbilBarangProsesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ambil-barang-proses',
  templateUrl: 'ambil-barang-proses.html',
})
export class AmbilBarangProsesPage {

  title = Global.title;
  user = Global.user;
  barang: any = [];
  listKota: any = [];
  id_kota: number;
  nama_penerima: string;
  no_telp: string;
  alamat: string;

  constructor(
    public navCtrl: NavController,
    private api: Api,
    private loadHelp: LoadingHelper,
    private alertHelp: AlertHelper,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AmbilBarangProsesPage');
    this.api.get("tarifkota").subscribe((res: any) => {
      this.listKota = res;
    });
  }

  tambahBarang() {
    let item = { nama: '', jumlah: 1 }
    this.barang.push(item);
  }

  hapusBarang(index) {
    //console.log(index);
    this.barang.splice(index, 1);
  }

  submit() {
    let dataBarang = {
      data: this.barang,
      id_customer: this.user.id,
      nama_penerima: this.nama_penerima,
      no_telp: this.no_telp,
      alamat: this.alamat,
      id_kota: this.id_kota
      //data: "",
    };

    // console.log(dataBarang);

    if (this.barang.length == 0) {
      this.alertHelp.showAlert("Minimal mengirim 1 barang", "Info");
    } else {
      this.loadHelp.showLoading("Tunggu...");
      // this.alertHelp.showAlert("berhasil", "info");
      this.api.post("pengiriman", dataBarang).subscribe((res: any) => {
        this.loadHelp.dismissLoading();
        if (res == "success") {
          this.alertHelp.showAlert("Berhasil simpan data", "Info");
        } else {
          this.alertHelp.showAlert("gagal menyimpan data", "Info");
        }
        // console.log(res);
        // this.navCtrl.push(AmbilBarangPage);
      }, (error: any) => {
        this.loadHelp.dismissLoading();
        this.alertHelp.showAlert("Terjadi error pada server", "Error");
        // console.log("error pada server");
      });
    }

    // this.api.post("test.php", dataBarang).subscribe((response:any) => {
    //   console.log(response);
    // }, (error:any) => {
    //   console.log(error);
    // });
  }

}
