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

  categories: Observable<any>

  constructor(private activatedRoute: ActivatedRoute) {

  }



  ngOnInit() {
    console.log("datos")
    console.log(this.activatedRoute.snapshot.data.datos)

    const datos = this.activatedRoute.snapshot.data.datos

    console.log(datos)
  }

  // getCategories(): Observable<any> {
  //   this.prestaShopService.getCategories()
  //     .subscribe(
  //       (response) => this.categories = response,
  //       error => console.log(error)
  //     )
  //   return this.categories
  // }


}
