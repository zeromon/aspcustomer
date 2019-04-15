import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Global } from '../../app/global';

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
  barang:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AmbilBarangProsesPage');
  }

  tambahBarang(){
    let item = {nama:'',jumlah:1}
    this.barang.push(item);
  }

}
