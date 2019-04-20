import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Global } from '../../app/global';

import { Api } from '../../providers/api/api';
import { AlertHelper } from '../../helpers/alert-helper';
import { LoadingHelper } from '../../helpers/loading-helper';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  title = Global.title;
  nama:string;
  no_telp;
  psw;
  ulangpsw;
  constructor(
    public navCtrl: NavController,
    private api: Api,
    private alertHelp: AlertHelper,
    private loadHelp: LoadingHelper,
  ) {

  }

  daftar() { 
    let data = {
      nama: this.nama,
      psw: this.psw,
      no_telp: this.no_telp,
    }

    this.loadHelp.showLoading("Tunggu");
    this.api.post("register",data).subscribe((res:any)=>{
      this.loadHelp.dismissLoading();
      if(res=="success"){
        this.alertHelp.showAlert("Berhasil daftar");
        this.reset();
      }else{
        this.alertHelp.showAlert("gagal daftar");
      }
    },(error:any)=>{
      this.loadHelp.dismissLoading();
      console.log(error);
    });
  }

  reset(){
    this.nama = '';
    this.psw = '';
    this.no_telp = '';
    this.ulangpsw = '';
  }

}
