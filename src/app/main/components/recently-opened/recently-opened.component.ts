import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-recently-opened',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './recently-opened.component.html',
  styleUrl: './recently-opened.component.scss',
})
export class RecentlyOpenedComponent {
  recentlyOpenedCards: Array<string> = [
    'Medical research in Latin America',
    'Medical research in South America',
    'Medical research in Canada',
  ];
}
