import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapComponent } from './components/cap/cap.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { HomeComponent } from './components/home/home.component';
import { ShoeComponent } from './components/shoe/shoe.component';
import { TshirtComponent } from './components/tshirt/tshirt.component';

const routes: Routes = [
  {path:'', component:CrearProductoComponent},
  {path:'home', component: HomeComponent},
  {path:'shirt', component: TshirtComponent},
  {path:'editar-shirt', component: TshirtComponent},
  {path:'shoe', component:ShoeComponent},
  {path:'cap', component:CapComponent},
  {path:'**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
