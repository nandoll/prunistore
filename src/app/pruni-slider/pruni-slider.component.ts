import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Glide from '@glidejs/glide'

@Component({
  selector: 'app-pruni-slider',
  templateUrl: './pruni-slider.component.html',
  styleUrls: ['./pruni-slider.component.scss']
})
export class PruniSliderComponent implements OnInit {

  @ViewChild("glide", { read: ElementRef }) glide: ElementRef

  constructor() {
  }

  ngOnInit() {
    const element = this.glide.nativeElement,
      options = {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 4000
      }
    const slider = new Glide(element, options)
    slider.mount()
  }


}
