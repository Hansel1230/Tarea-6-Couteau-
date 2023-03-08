import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryUniversityPage } from './country-university.page';

const routes: Routes = [
  {
    path: '',
    component: CountryUniversityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryUniversityPageRoutingModule {}
