import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Caminho para seu componente Home
import { ContaComponent } from './conta-component/conta-component.component'; // Caminho para seu componente Conta
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule], // Importa o RouterModule para suporte a rotas
})
export class AppComponent {
  title = 'Banco Angular'; // Removida a duplicidade
}
