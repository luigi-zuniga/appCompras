import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { ApddproveeComponent } from './proveedores/apddprovee/apddprovee.component';

const routes: Routes = [
  { path:'', component: InicioComponent },
  { path:'proveedores' , component: ProveedoresComponent },
  { path: '**', component:InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    ApddproveeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
