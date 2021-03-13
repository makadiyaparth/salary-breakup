import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-price',
  templateUrl: './display-price.component.html',
})
export class DisplayPriceComponent {
  @Input() price: number;
  @Input() label: string;
}
