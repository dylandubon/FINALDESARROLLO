import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PixelService } from './services/Pixeles.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ShowComponent } from './show/show.component';
import { TableComponent } from './table/table.component';
import {MatCardModule} from '@angular/material/card';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { categoriasservices } from './categorias/categorias.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    TableComponent,
    AcercaDeComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatCardModule
  ],
  providers: [
    PixelService, categoriasservices
    //{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
