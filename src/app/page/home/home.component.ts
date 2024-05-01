import { Component, inject, Inject } from '@angular/core';
import { HousinglocationComponent } from '../../housinglocation/housinglocation.component';
import { HousingLocation } from '../../interfaces/housinglocation';
import { HousingService } from '../../services/housing/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousinglocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
