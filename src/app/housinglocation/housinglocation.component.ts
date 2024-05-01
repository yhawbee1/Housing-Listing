import { Component, Input } from '@angular/core';
import { HousingLocation } from '../interfaces/housinglocation';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {
  @Input() housingLocation!: HousingLocation;
}
