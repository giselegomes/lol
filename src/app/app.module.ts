import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AutocadastroComponent } from './components/autocadastro/autocadastro.component';
import { PedidoOnlineComponent } from './components/pedido-online/pedido-online.component';
import { AppRoutingModule } from './app-routing.module';
import { InicialClienteComponent } from './components/inicial-cliente/inicial-cliente.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutocadastroComponent,
    PedidoOnlineComponent,
    InicialClienteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
