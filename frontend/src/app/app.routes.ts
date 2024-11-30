import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContaComponent } from './conta-component/conta-component.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Garante que a rota vazia seja tratada completamente
  { path: 'conta', component: ContaComponent },
];
