import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './feature/contact/contact.component';
import { HelpComponent } from './feature/help/help.component';
import { ProfileComponent } from './feature/profile/profile.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'help', component: HelpComponent },
  { path: 'profile', loadChildren: () => import('./feature/profile/profile.module').then(m => m.ProfileModule), component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
