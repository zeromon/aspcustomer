import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Global } from '../../app/global';

import { Api } from '../../providers/api/api';
import { AlertHelper } from '../../helpers/alert-helper';

/**
 * Generated class for the CekTarifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cek-tarif',
  templateUrl: 'cek-tarif.html',
})
export class CekTarifPage {

  title = Global.title;
  listKota: any = [];
  p: number;
  l: number;
  t: number;
  hargaKota: number;
  indexKota: number;
  beratDimensi: number;
  estimasi: string;
  totalBerat: number;
  ongkir: number;
  berat: number = 1;
  constructor(
    public navCtrl: NavController,
    private api: Api,
    private alertHelp: AlertHelper,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    // mendapatkan data list kota
    // console.log('ionViewDidLoad CekTarifPage');
    this.api.get("tarifkota").subscribe((res: any) => {
      this.listKota = res;
      //console.log(this.listKota);
    }, (error: any) => {
      this.alertHelp.showAlert("Terjadi error pada server", "Error");
    });
  }

  // menghitung berat dimensi
  hitungBeratDimensi() {
    let vol = (this.p * this.l * this.t) / 6000;
    this.beratDimensi = vol;
    this.totalBerat = (this.berat > vol) ? this.berat : vol;
    this.ongkir = this.totalBerat * this.hargaKota;
  }

  // eksekusi fungsi ini saat memilih kota
  pilihKota() {
    //console.log(this.indexKota);
    if (this.indexKota != null) {
      this.hargaKota = this.listKota[this.indexKota].harga;
      this.estimasi = this.listKota[this.indexKota].estimasi;
    }
  }

  // fungsi reset
  reset() {
    this.indexKota = null;
    this.estimasi = "";
    this.berat = 1;
    this.ongkir = null;
    this.totalBerat = null;
    this.beratDimensi = null;
    this.p = null;
    this.l = null;
    this.t = null;
  }

}
