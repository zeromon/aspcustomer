import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Global } from '../../app/global';

import { Api } from '../../providers/api/api';

import { AlertHelper } from '../../helpers/alert-helper';
import { LoadingHelper } from '../../helpers/loading-helper';

/**
 * Generated class for the RiwayatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-riwayat',
  templateUrl: 'riwayat.html',
})
export class RiwayatPage {
  title = Global.title;
  user = Global.user;
  listRiwayat: any = [];
  tanggal;
  constructor(
    public navCtrl: NavController,
    private api: Api,
    private alertHelp: AlertHelper,
    private loadHelp: LoadingHelper,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    this.getData();
    //console.log('ionViewDidLoad RiwayatPage');
  }

  getData(){
    this.loadHelp.showLoading("Loading...");
    this.api.get('riwayat',{id: this.user.id}).subscribe((res:any)=>{
      this.loadHelp.dismissLoading();
      console.log(res);
      this.listRiwayat = res;
    },(error:any)=>{
      this.loadHelp.dismissLoading();
      this.alertHelp.showAlert("Terjadi Error pada server");
    });
  }

  cari(){
    this.loadHelp.showLoading("Loading...");
    this.api.get('riwayat',{id: this.user.id, tanggal: this.tanggal}).subscribe((res:any)=>{
      this.loadHelp.dismissLoading();
      console.log(res);
      this.listRiwayat = res;
    },(error:any)=>{
      this.loadHelp.dismissLoading();
      this.alertHelp.showAlert("Terjadi Error pada server");
    });
  }

  reset(){
    this.tanggal = null;
    this.getData();
  }

  doRefresh(refresher: any) {
    this.getData();
    refresher.complete();
  }

}
