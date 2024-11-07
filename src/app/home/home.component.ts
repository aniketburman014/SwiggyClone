import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MainSectionComponent } from "../main-section/main-section.component";
import { FoodMenuComponent } from "../food-menu/food-menu.component";
import { RestroCardComponent } from "../restro-card/restro-card.component";
import { CitySectionComponent } from "../city-section/city-section.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainSectionComponent, FoodMenuComponent, RestroCardComponent, CitySectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
