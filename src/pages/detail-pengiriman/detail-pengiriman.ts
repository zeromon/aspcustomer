import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Global } from '../../app/global';

import { Api } from '../../providers/api/api';

import { AlertHelper } from '../../helpers/alert-helper';
import { LoadingHelper } from '../../helpers/loading-helper';

/**
 * Generated class for the DetailPengirimanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-pengiriman',
  templateUrl: 'detail-pengiriman.html',
})
export class DetailPengirimanPage {
  barang: any = [];
  listKota: any = [];
  liststatus: any = [];
  kota_penerima: number;
  nama_penerima: string;
  no_telp_penerima: string;
  alamat_penerima: string;
  kota_pengirim: number;
  nama_pengirim: string;
  no_telp_pengirim: string;
  alamat_pengirim: string;
  id_pengiriman: number;
  jenis_pengiriman: string;
  kurir_jemput: string;
  kurir_kirim: string;
  kurir_jemput_platno: string;
  kurir_kirim_platno: string;
  penerima: string;
  biaya: number;
  berat: number;
  title = Global.title;

  constructor(
    public navCtrl: NavController,
    private api: Api,
    private loadHelp: LoadingHelper,
    private alertHelp: AlertHelper, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    let id = this.navParams.get('id');
    this.loadHelp.showLoading('Loading');
    this.api.get('detailpengiriman?id='+id).subscribe((res:any)=>{
      this.nama_penerima = res.nama_penerima;
      this.kota_penerima = res.kota_penerima;
      this.no_telp_penerima = res.no_telp_penerima;
      this.alamat_penerima = res.alamat_penerima;
      this.nama_pengirim = res.nama_pengirim;
      this.kota_pengirim = res.kota_pengirim;
      this.no_telp_pengirim = res.no_telp_pengirim;
      this.alamat_pengirim = res.alamat_pengirim;
      this.barang = res.barang;
      this.jenis_pengiriman = res.jenis_pengiriman;
      this.kurir_jemput = res.kurir_jemput;
      this.kurir_kirim = res.kurir_kirim;
      this.kurir_jemput_platno = res.kurir_jemput_platno;
      this.kurir_kirim_platno = res.kurir_kirim_platno;
      this.penerima = res.diterima_oleh;
      this.biaya = res.biaya;
      this.berat = res.berat;
      this.liststatus = res.list_status;
      this.api.get("tarifkota").subscribe((res: any) => {
        this.listKota = res;
        this.loadHelp.dismissLoading();
      });
    }, (error:any)=>{
      this.loadHelp.dismissLoading();
      this.alertHelp.showAlert('Terjadi error pada server', 'Error');
    });
  }

}
