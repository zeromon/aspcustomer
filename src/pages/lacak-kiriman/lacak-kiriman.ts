import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Global } from '../../app/global';

import { Api } from '../../providers/api/api';
import { AlertHelper } from '../../helpers/alert-helper';
import { LoadingHelper } from '../../helpers/loading-helper';

/**
 * Generated class for the LacakKirimanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lacak-kiriman',
  templateUrl: 'lacak-kiriman.html',
})
export class LacakKirimanPage {
  title = Global.title;
  listPo: any = [];
  no_resi: string = '';

  constructor(
    public navCtrl: NavController,
    private loadHelp: LoadingHelper,
    private alertHelp: AlertHelper,
    private api: Api, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LacakKirimanPage');
  }

  proses(){
    this.loadHelp.showLoading('Loading');
    this.api.get('lacakkiriman?no_resi='+this.no_resi).subscribe((res:any) => {
      this.listPo = res;
      this.loadHelp.dismissLoading();
    },(error:any)=>{
      this.loadHelp.dismissLoading();
      this.alertHelp.showAlert('Terjadi error pada server', 'Error');
    });
  }

}
