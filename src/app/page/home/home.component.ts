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
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  filteredResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) => housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
