import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AutocadastroComponent } from './pages/autocadastro/autocadastro.component';
import { PedidoOnlineComponent } from './pages/pedido-online/pedido-online.component';
import { AppRoutingModule } from './app-routing.module';
import { InicialClienteComponent } from './pages/inicial-cliente/inicial-cliente.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrcamentosComponent } from './pages/orcamentos/orcamentos.component';
import { ListagemPedidosComponent } from './pages/listagem-pedidos/listagem-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutocadastroComponent,
    PedidoOnlineComponent,
    InicialClienteComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    OrcamentosComponent,
    ListagemPedidosComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
