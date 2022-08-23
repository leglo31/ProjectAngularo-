import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './appareil/mon-premier.component';
import { AppareilService } from './services/appareil.service';

@NgModule({
  declarations: [AppComponent, MonPremierComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AppareilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
