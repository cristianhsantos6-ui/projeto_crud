import { Routes } from '@angular/router';
import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { AtletaListaComponent } from './component/atleta/atleta-lista-component/atleta-lista-component';
import { CadastroCorrida } from './component/cadastro-corrida/cadastro-corrida';
import { CorridasListaComponent } from './component/corridas-lista/corridas-lista';
import { CadastroInscricaoComponent } from './component/cadastro-inscricao/cadastro-inscricao';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastroAtleta', component: AtletaComponent },
  { path: 'cadastroAtleta/:id', component: AtletaComponent },
  { path: 'listarAtleta', component: AtletaListaComponent },
  { path: 'cadastroCorrida', component: CadastroCorrida },
  { path: 'corridas', component: CorridasListaComponent },
  { path: 'cadastro-inscricao', component: CadastroInscricaoComponent },
  { path: '**', redirectTo: 'corridas' }
];

