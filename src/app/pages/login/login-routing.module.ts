import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordChangePage } from '../password-change/password-change.page';
import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'password-change',
    loadChildren: () => import('../../pages/password-change/password-change.module').then( m => m.PasswordChangePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
