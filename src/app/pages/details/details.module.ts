import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';
import { PipesModule } from '../../pipes/pipes.module';
import { DetailsPage } from './details.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    SwiperModule,
    PipesModule,
    ReactiveFormsModule,
  ],
  providers: [ReactiveFormsModule, PipesModule],
  declarations: [DetailsPage],
})
export class DetailsPageModule {}
