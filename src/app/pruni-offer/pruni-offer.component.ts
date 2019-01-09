import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-pruni-offer',
  templateUrl: './pruni-offer.component.html',
  styleUrls: ['./pruni-offer.component.scss']
})
export class PruniOfferComponent implements OnInit {

  categories

  constructor(private prestaShopService: ConfigService) {
    this.prestaShopService.getCategories().subscribe(
      (response) => {
        this.categories = response
        console.log(response)
      }
    )

  }

  ngOnInit() {
  }


}
