import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Global} from '../../app/global';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CekTarifPage');
  }

}
