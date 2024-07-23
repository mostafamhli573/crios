import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss'],
})
export class Section6Component  implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert',

      message: `
        <div class="alert-content">
          <div class="alert-logo">
            <img src="assets/images/logo.png" alt="Logo">
          </div>
          <h2>Thanks for downloading our template</h2>
          <p>Hope that you enjoy it well! Check also our site</p>
                <a class='main-button' href='https://www.symu.co'>www.symu.co</a>
        </div>
      `,
    
    });

    await alert.present();
  }
}
