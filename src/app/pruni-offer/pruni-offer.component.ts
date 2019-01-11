import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pruni-offer',
  templateUrl: './pruni-offer.component.html',
  styleUrls: ['./pruni-offer.component.scss']
})
export class PruniOfferComponent implements OnInit {

  categories: any
  categoriesObservable: Observable<any>

  constructor(
    /* Inicio de variables inyectadas dentro del constructor */
    private activatedRoute: ActivatedRoute,
    private prestashopService: ConfigService
    /* Fin de variables inyectadas dentro del constructor */
  ) {

    /* Inicio de la variable local Observable */
    // this.categoriesObservable = this.prestashopService.getCategories();
    // this.categoriesObservable.subscribe(response => console.log(response))
    // console.log(this.categoriesObservable)
    /* Fin de la variable local Observable */



  }



  ngOnInit() {
    // console.log("datos")
    // console.log(this.activatedRoute.snapshot.data.datos)

    // const datos = this.activatedRoute.snapshot.data.datos

    // console.log(datos)
    this.prestashopService.getCategories()
      .subscribe(
        /* Respuesta del servicio Categorias desde el API */
        (response) => {
          let cat = response
          this.categories = cat["categories"].filter(ruta => ruta.id_parent == 2)



          // this.categories = cat
          console.log(this.categories)
        })
  }

  // getCategories() {
  //   this.prestashopService.getCategories()
  //     .subscribe(
  //       (response) => this.categories = response,
  //       error => console.log(error)
  //     )
  //   return this.categories
  // }


}
