import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-searchable-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="relative w-full max-w-xs">
      <input 
        type="text" 
        [(ngModel)]="searchTerm"
        (input)="filterOptions()"
        (focus)="toggleDropdown(true)"
        (blur)="hideDropdown()"
        [placeholder]="placeholder"
        class="input border-0 w-full "
      />
      <ul 
        [hidden]="!isDropdownVisible || filteredOptions.length === 0"
        class="absolute left-0 right-0 mt-1 z-10 bg-base-100 shadow-lg rounded-md max-h-60 overflow-auto">
        <li 
          *ngFor="let option of filteredOptions" 
          (mousedown)="selectOption(option)" 
          class="p-2 hover:bg-base-200 cursor-pointer">
          {{ option.name }}
        </li>
      </ul>
    </div>
  `
})
export class SearchableSelectComponent implements OnChanges {
  @Input() placeholder: string = '';
  @Input() Items: { id: number; name: string; }[] = [];
  // Emits an event when the user selects an item from the dropdown
  @Output() selectedItemChange = new EventEmitter<any>();

  searchTerm = '';
  isDropdownVisible = false;
  filteredOptions: { id: number; name: string; }[] = [];

  ngOnInit() {
    this.filteredOptions = [...this.Items];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['Items']) {
      this.searchTerm = '';
      this.filteredOptions = [...this.Items];
    }
  }

  filterOptions() {
    this.filteredOptions = this.Items.filter(option =>
      option.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.isDropdownVisible = this.filteredOptions.length > 0;
  }

  selectOption(option: any) {
    this.searchTerm = option.name;
    this.isDropdownVisible = false;
    this.selectedItemChange.emit(option);
  }

  toggleDropdown(state: boolean) {
    this.isDropdownVisible = state && this.filteredOptions.length > 0;
  }

  hideDropdown() {
    setTimeout(() => this.isDropdownVisible = false, 150);
  }
}
