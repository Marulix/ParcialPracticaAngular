import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieTableComponent } from './serie-table/serie-table.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SerieTableComponent, SerieDetailComponent],
  declarations: [SerieTableComponent, SerieDetailComponent]
})
export class SerieModule { }
