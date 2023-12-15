import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {}
