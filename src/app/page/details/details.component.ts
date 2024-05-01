import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing/housing.service';
import { HousingLocation } from '../../interfaces/housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }
}
