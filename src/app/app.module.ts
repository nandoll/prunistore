import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { Route, RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PruniFooterComponent } from './pruni-footer/pruni-footer.component';
import { PruniSliderComponent } from './pruni-slider/pruni-slider.component';
import { PruniOfferComponent } from './pruni-offer/pruni-offer.component';
import { PruniHighlightComponent } from './pruni-highlight/pruni-highlight.component';
import { PruniCollectionComponent } from './pruni-collection/pruni-collection.component';
import { PruniMagazineComponent } from './pruni-magazine/pruni-magazine.component';
import { PruniNewslettterComponent } from './pruni-newslettter/pruni-newslettter.component';
import { PruniContactComponent } from './pruni-contact/pruni-contact.component';
import { PruniHeaderComponent } from './pruni-header/pruni-header.component';
import { ConfigService } from './config/config.service';


/* Rutas de la aplicación */
// Las rutas serán una constante de tipo Route
// Esta constante será un arreglo de json's
// Route esta en @angular/router

const route: Route[] = [
  // La primera parte es la ruta por "defecto"
  // En este caso será el "home"
  { path: "", component: PruniOfferComponent }
]
// ahora se debe activar importando el RouterModule
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PruniFooterComponent,
    PruniSliderComponent,
    PruniOfferComponent,
    PruniHighlightComponent,
    PruniCollectionComponent,
    PruniMagazineComponent,
    PruniNewslettterComponent,
    PruniContactComponent,
    PruniHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
