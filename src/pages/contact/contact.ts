import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Global } from '../../app/global';

import { Api } from '../../providers/api/api';
import { AlertHelper } from '../../helpers/alert-helper';
import { LoadingHelper } from '../../helpers/loading-helper';
import { Storage } from '@ionic/storage';

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
  nama_login;
  psw_login;
  user:any;
  is_login = Global.is_login;
  constructor(
    public navCtrl: NavController,
    private api: Api,
    private storage: Storage,
    private alertHelp: AlertHelper,
    private loadHelp: LoadingHelper,
  ) {

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
    this.storage.get('user').then((data:any)=>{
      if(data){
        this.is_login = true;
        Global.is_login = this.is_login;
        this.user = data;
      }else{
      }
      // console.log(data);
    });
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

  login(){
    let data = {
      nama: this.nama_login,
      psw: this.psw_login
    };
    this.loadHelp.showLoading("Tunggu");
    this.api.post("login",data).subscribe((res:any)=>{
      this.loadHelp.dismissLoading();
      this.is_login = true;
      Global.is_login = this.is_login;
      this.user = data;
      // set user in storage
      this.storage.set('user', data);
    },(error:any)=>{
      this.loadHelp.dismissLoading();
      this.alertHelp.showAlert("Terjadi error pada server","info");
    });
  }

  logout(){
    this.storage.clear();
    this.is_login = false;
    Global.is_login = this.is_login;
  }

  reset(){
    this.nama = '';
    this.psw = '';
    this.no_telp = '';
    this.ulangpsw = '';
  }

}
