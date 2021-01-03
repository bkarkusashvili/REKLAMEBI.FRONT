import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaseComponent } from './components/layout';
import { SharedComponents } from './components';

@NgModule({
  declarations: [
    ...SharedComponents,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BaseComponent,
  ]
})
export class SharedModule { }
