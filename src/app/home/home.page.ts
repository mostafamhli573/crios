import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalContentComponent } from '../components/modal-content/modal-content.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalContentComponent,
    });
    return await modal.present();
  }

}
