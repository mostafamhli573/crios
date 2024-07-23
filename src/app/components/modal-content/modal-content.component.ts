import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent {
  @Input() isOpen: boolean = false;

  close() {
    this.isOpen = false;
  }

  redirectToSite() {
    window.open('https://www.symu.co', '_blank');
  }
}
