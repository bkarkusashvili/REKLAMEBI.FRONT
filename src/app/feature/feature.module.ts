import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [ContactComponent, HelpComponent],
  imports: [
    CommonModule,
  ]
})
export class FeatureModule { }
