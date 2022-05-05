import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '', component: HomeComponent, pathMatch: 'full',
      children: [
        {path: 'steps', loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule)}
      ],
    }])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
