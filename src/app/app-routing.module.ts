import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './feature/profile/profile.component';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./feature/profile/profile.module').then(m => m.ProfileModule),
    component: ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
