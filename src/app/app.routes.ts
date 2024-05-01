import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { DetailsComponent } from './page/details/details.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home | House Listing' },
    
    { path: 'details/:id', component: DetailsComponent, title: 'Details | House Listing'}
];
