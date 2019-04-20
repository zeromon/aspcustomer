import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingHelper {
    loading;
    constructor(public loadingCtrl: LoadingController) {
    }

    showLoading(text = "") {
        this.loading = this.loadingCtrl.create({
            spinner: "crescent",
            content: text
        });

        this.loading.present();

        // setTimeout(() => {
        //   loading.dismiss();
        // }, 5000);
    }

    dismissLoading() {
        this.loading.dismiss();
    }
}