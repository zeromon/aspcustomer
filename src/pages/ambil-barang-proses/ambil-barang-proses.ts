import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Global } from '../../app/global';

import { Api } from '../../providers/api/api';
import { AmbilBarangPage } from '../ambil-barang/ambil-barang';

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
  barang: any = [];
  constructor(
    public navCtrl: NavController,
    private api: Api,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AmbilBarangProsesPage');
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
      data: this.barang
      //data: "",
    };

    this.api.post("pengiriman", dataBarang).subscribe((res: any) => {
      console.log(res);
      // this.navCtrl.push(AmbilBarangPage);
    }, (error: any) => {
      console.log("error pada server");
    });

    // this.api.post("test.php", dataBarang).subscribe((response:any) => {
    //   console.log(response);
    // }, (error:any) => {
    //   console.log(error);
    // });
    // this.api.get("registrant/listqa").subscribe((res:any) => {
    //   console.log(res);
    // });
  }

}
