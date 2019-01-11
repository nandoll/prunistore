import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-pruni-highlight',
  templateUrl: './pruni-highlight.component.html',
  styleUrls: ['./pruni-highlight.component.scss']
})
export class PruniHighlightComponent implements OnInit {

  constructor(private pruniService: ConfigService) { }

  libros

  ngOnInit() {

    this.pruniService.getBooks()
      .subscribe(
        (result) => {
          this.libros = result["products"]
          console.log(this.libros)
        }
      )

  }

}
