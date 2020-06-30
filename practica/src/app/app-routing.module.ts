import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { ArraysComponent } from './components/arrays/arrays.component';

const routes: Routes = [
  { path: '', redirectTo: 'arrays', pathMatch: 'full'},
  { path: 'forms', component: FormsComponent },
  { path: 'arrays', component: ArraysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
