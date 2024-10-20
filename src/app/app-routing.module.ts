import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgendarIdentidadeComponent } from './pages/agendar-identidade/agendar-identidade.component';
import { AgendarCnhComponent } from './pages/agendar-cnh/agendar-cnh.component';
import { AgendarVeiculoComponent } from './pages/agendar-veiculo/agendar-veiculo.component';
import { ConfirmarAgendamentoComponent } from './pages/confirmar-agendamento/confirmar-agendamento.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'agendar/identidade', component: AgendarIdentidadeComponent},
  {path: 'agendar/cnh', component: AgendarCnhComponent},
  {path: 'agendar/veiculo', component: AgendarVeiculoComponent},
  {path: 'agendar/confirmar', component: ConfirmarAgendamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
