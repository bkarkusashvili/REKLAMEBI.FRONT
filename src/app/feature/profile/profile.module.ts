import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings/settings.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [ProfileComponent, SettingsComponent, InfoComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
})
export class ProfileModule { }
