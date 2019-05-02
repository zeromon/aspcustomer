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
  listKota: any = [{"id_kota":1,"kota":"Surabaya","harga":7000,"estimasi":"2-3 hari"},{"id_kota":2,"kota":"Probolinggo","harga":10000,"estimasi":"3-4 hari"},{"id_kota":3,"kota":"Pasuruan","harga":9000,"estimasi":"2-3 hari"},{"id_kota":4,"kota":"Mojokerto","harga":9000,"estimasi":"2-3 hari"},{"id_kota":5,"kota":"Malang","harga":10000,"estimasi":"3-4 hari"},{"id_kota":6,"kota":"Madiun","harga":15000,"estimasi":"3-4 hari"},{"id_kota":7,"kota":"Kediri","harga":13000,"estimasi":"3-4 hari"},{"id_kota":8,"kota":"Blitar","harga":13000,"estimasi":"3-4 hari"},{"id_kota":9,"kota":"Batu","harga":14000,"estimasi":"3-4 hari"},{"id_kota":10,"kota":"Tulungagung","harga":17000,"estimasi":"3-4 hari"},{"id_kota":11,"kota":"Tuban","harga":18000,"estimasi":"3-4 hari"},{"id_kota":12,"kota":"Trenggalek","harga":19000,"estimasi":"3-5 hari"},{"id_kota":13,"kota":"Sumenep","harga":21000,"estimasi":"3-5 hari"},{"id_kota":14,"kota":"Situbondo","harga":20000,"estimasi":"3-5 hari"},{"id_kota":15,"kota":"Sidoarjo","harga":7000,"estimasi":"2-3 hari"},{"id_kota":16,"kota":"Sampang","harga":10000,"estimasi":"2-3 hari"},{"id_kota":17,"kota":"Ponorogo","harga":19000,"estimasi":"3-4 hari"},{"id_kota":18,"kota":"Pamekasan","harga":13000,"estimasi":"3-4 hari"},{"id_kota":19,"kota":"Pacitan","harga":23000,"estimasi":"3-4 hari"},{"id_kota":20,"kota":"Ngawi","harga":16000,"estimasi":"3-4 hari"},{"id_kota":21,"kota":"Nganjuk","harga":13000,"estimasi":"3-4 hari"},{"id_kota":22,"kota":"Magetan","harga":19000,"estimasi":"3-4 hari"},{"id_kota":23,"kota":"Lumajang","harga":13000,"estimasi":"3-4 hari"},{"id_kota":24,"kota":"Lamongan","harga":9000,"estimasi":"2-3 hari"},{"id_kota":25,"kota":"Jombang","harga":9000,"estimasi":"2-3 hari"},{"id_kota":26,"kota":"Jember","harga":20000,"estimasi":"3-4 hari"},{"id_kota":27,"kota":"Gresik","harga":9000,"estimasi":"2-3 hari"},{"id_kota":28,"kota":"Bondowoso","harga":11000,"estimasi":"3-4 hari"},{"id_kota":29,"kota":"Bojonegoro","harga":13000,"estimasi":"3-4 hari"},{"id_kota":30,"kota":"Banyuwangi","harga":23000,"estimasi":"3-5 hari"},{"id_kota":31,"kota":"Bangkalan","harga":10000,"estimasi":"2-3 hari"}];
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
    // this.api.get("tarifkota").subscribe((res: any) => {
    //   this.listKota = res;
    //   //console.log(this.listKota);
    // }, (error: any) => {
    //   this.alertHelp.showAlert("Terjadi error pada server", "Error");
    // });
  }

  // menghitung berat dimensi
  hitungBeratDimensi() {
    let vol = (this.p * this.l * this.t) / 6000;
    this.beratDimensi = parseFloat(vol.toFixed(2));
    this.totalBerat = (this.berat > vol) ? this.berat : Math.round(vol);
    this.ongkir = Math.round(this.totalBerat * this.hargaKota);
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
