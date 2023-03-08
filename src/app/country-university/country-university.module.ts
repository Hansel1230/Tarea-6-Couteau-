import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryUniversityPageRoutingModule } from './country-university-routing.module';

import { CountryUniversityPage } from './country-university.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryUniversityPageRoutingModule
  ],
  declarations: [CountryUniversityPage]
})
export class CountryUniversityPageModule {}
