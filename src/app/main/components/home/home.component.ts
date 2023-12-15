import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RecentlyOpenedComponent } from '../recently-opened/recently-opened.component';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SharedModule, RecentlyOpenedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  activeButton: string = '';
  searchControl = new FormControl();
  options: string[] = [
    'Create client confirmation email.',
    'Post meeting confirmation',
    'Post cold call email confirmation',
  ];
  buttons: string[] = ['Data-banks', 'AI’s Own Knowledge', 'Web research'];
  filteredOptions!: Observable<string[]>;
  appsDropdownOpened: boolean = false;

  constructor() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  openAppsDropdown(): void {
    this.appsDropdownOpened = !this.appsDropdownOpened;
    this.searchControl.setValue('');
  }

  sendMessage(): void {}

  isActiveButton(button: string): boolean {
    return this.activeButton == button;
  }
  setActiveButton(button: string): void {
    this.activeButton = button;
  }

  getButtonStyle(button: string) {
    if (this.isActiveButton(button)) {
      return { background: '#EEF4FF', color: '#0D3074' };
    } else {
      return { color: 'grey' };
    }
  }
}
