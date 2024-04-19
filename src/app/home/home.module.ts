import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NyapComponent } from './nyap/nyap.component';
import { ImagenComponent } from './imagen/imagen.component';
import { EstadoComponent } from './estado/estado.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
    
  ],
  declarations: [HomePage,NyapComponent,ImagenComponent, EstadoComponent]
})
export class HomePageModule {}
