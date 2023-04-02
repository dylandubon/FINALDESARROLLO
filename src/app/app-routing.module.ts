import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ShowComponent } from './show/show.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'show/:id', component: ShowComponent},
  {path: 'home', component:TableComponent},
  {path: 'AcercaDe', component:AcercaDeComponent},
  {path:'categorias', component:CategoriasComponent},
  
  {path: '', pathMatch: 'full',redirectTo:'home'},
  {path: '**', pathMatch: 'full',redirectTo:'home'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
