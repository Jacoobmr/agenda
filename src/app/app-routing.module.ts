import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyTableComponent } from './my-table/my-table.component';
import { MyDashComponent } from './my-dash/my-dash.component';
import { MyTreeComponent } from './my-tree/my-tree.component';
import { MyDragComponent } from './my-drag/my-drag.component';
import { NewFormComponent } from './new-form/new-form.component';

const routes: Routes = [
  { path: '', component: MyDashComponent },
  { path: 'lista', component: MyTableComponent },
  { path: 'nuevo', component: NewFormComponent },
  { path: 'arbol' , component: MyTreeComponent },
  { path: 'dd' , component: MyDragComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
