import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { AutocadastroComponent } from './componets/autocadastro/autocadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutocadastroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
