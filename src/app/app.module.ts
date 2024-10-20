import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/_components/navbar/navbar.component';
import { FooterComponent } from './pages/_components/footer/footer.component';
import { AgendarIdentidadeComponent } from './pages/agendar-identidade/agendar-identidade.component';
import { AgendarCnhComponent } from './pages/agendar-cnh/agendar-cnh.component';
import { AgendarVeiculoComponent } from './pages/agendar-veiculo/agendar-veiculo.component';
import { ConfirmarAgendamentoComponent } from './pages/confirmar-agendamento/confirmar-agendamento.component';
import { BaseUiComponent } from './pages/_components/base-ui/base-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AgendarIdentidadeComponent,
    AgendarCnhComponent,
    AgendarVeiculoComponent,
    ConfirmarAgendamentoComponent,
    BaseUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
