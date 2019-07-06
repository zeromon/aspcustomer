import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Global } from '../../app/global';

import { Api } from '../../providers/api/api';
import { AlertHelper } from '../../helpers/alert-helper';
import { LoadingHelper } from '../../helpers/loading-helper';

/**
 * Generated class for the LupaPswPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lupa-psw',
  templateUrl: 'lupa-psw.html',
})
export class LupaPswPage {
  title = Global.title;
  no_telp: string;
  psw: string;
  constructor(
    public navCtrl: NavController,
    private api: Api,
    private loadHelp: LoadingHelper,
    private alertHelp: AlertHelper, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LupaPswPage');
  }

  proses(){
    let data = {
      no_telp : this.no_telp,
      psw: this.psw
    };

    this.loadHelp.showLoading('Proses');
    this.api.post('resetpsw',data, Global.reqOpts).subscribe((res:any)=>{
      this.loadHelp.dismissLoading();
      this.alertHelp.showAlert('Berhasil ubah password', 'Info');
    },(error:any)=>{
      this.loadHelp.dismissLoading();
      this.alertHelp.showAlert('Terjadi error pada server','Error');
    });
  }

}
