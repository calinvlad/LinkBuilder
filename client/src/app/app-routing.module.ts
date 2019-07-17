import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuildlinkComponent} from "./components/buildlink/buildlink.component";
import {ReadlinkComponent} from "./components/readlink/readlink.component";
import {OpsComponent} from "./components/ops/ops.component";


const routes: Routes = [
  {path: 'link/build', component: BuildlinkComponent, pathMatch: 'full'},
  {path: ':name', component: ReadlinkComponent},
  { path: '', component: OpsComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
