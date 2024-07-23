import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FooterModule } from '../components/footer/footer.module';
import { HeaderModule } from '../components/header/header.module';
import { Section1Module } from '../components/section1/section1.module';
import { Section2Module } from '../components/section2/section2.module';
import { Section3Module } from '../components/section3/section3.module';
import { Section4Module } from '../components/section4/section4.module';
import { Section5Module } from '../components/section5/section5.module';
import { Section6Module } from '../components/section6/section6.module';
import { ModalContentComponent } from '../components/modal-content/modal-content.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    FooterModule,
    Section1Module,
    Section2Module,
    Section3Module,
    Section4Module,
    Section5Module,
    Section6Module,
  ],
  declarations: [HomePage,ModalContentComponent]
})
export class HomePageModule {}
