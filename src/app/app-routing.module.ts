import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOneComponent } from 'src/components/list-one/list-one.component';
import { ListTwoComponent } from 'src/components/list-two/list-two.component';


const routes: Routes = [
  { path: 'list-one', component: ListOneComponent},
  { path: 'list-two', component: ListTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
