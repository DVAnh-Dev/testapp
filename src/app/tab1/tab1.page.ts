import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public alertBtn = {
    text: 'OK',
    role: 'confirm',
    handler: () => {
      console.log('Alert confirmed');
    },
  };
  constructor(private alertController: AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      message: 'A message should be a short, complete sentence.',
      buttons: [this.alertBtn],
    });

    await alert.present();
  }
}
