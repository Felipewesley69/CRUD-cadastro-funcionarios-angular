import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCreatComponent } from './components/cadastro/cadastro-creat/cadastro-creat.component';
import { CadastroDeleteComponent } from './components/cadastro/cadastro-delete/cadastro-delete.component';
import { CadastroUpdateComponent } from './components/cadastro/cadastro-update/cadastro-update.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaFuncionariosComponent } from './pages/lista-funcionarios/lista-funcionarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cadastro',
    component: ListaFuncionariosComponent
  },
  {
    path: 'cadastro/novo-cadastro',
    component: CadastroCreatComponent
  },
  {
    path: 'cadastro/editar-cadastro/:id',
    component: CadastroUpdateComponent
  },
  {
    path: 'cadastro/deletar-cadastro/:id',
    component: CadastroDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
