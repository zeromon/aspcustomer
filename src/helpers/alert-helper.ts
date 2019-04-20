import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AlertHelper {
    constructor(public alertCtrl: AlertController) { }

    showAlert(mymessage = '', mytitle = '') {
        let alert = this.alertCtrl.create({
            title: mytitle,
            message: mymessage,
            buttons: ['Tutup']
        });
        alert.present();
    }
}