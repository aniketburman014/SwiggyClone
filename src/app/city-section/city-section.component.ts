import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-section.component.html',
  styleUrl: './city-section.component.scss'
})
export class CitySectionComponent {
  deliverySections = [
    {
      title: 'Cities with food delivery',
      cities: [
        'Order food online in Bangalore',
        'Order food online in Gurgaon',
        'Order food online in Hyderabad',
        'Order food online in Delhi',
        'Order food online in Mumbai',
        'Order food online in Pune',
        'Order food online in Kolkata',
        'Order food online in Chennai',
        'Order food online in Ahmedabad',
        'Order food online in Chandigarh',
        'Order food online in Jaipur'
      ]
    },
    {
      title: 'Cities with grocery delivery',
      cities: [
        'Order grocery delivery in Bangalore',
        'Order grocery delivery in Gurgaon',
        'Order grocery delivery in Hyderabad',
        'Order grocery delivery in Delhi',
        'Order grocery delivery in Mumbai',
        'Order grocery delivery in Pune',
        'Order grocery delivery in Kolkata',
        'Order grocery delivery in Chandigarh',
        'Order grocery delivery in Ahmedabad',
        'Order grocery delivery in Chennai',
        'Order grocery delivery in Jaipur'
      ]
    }
  ];
}
