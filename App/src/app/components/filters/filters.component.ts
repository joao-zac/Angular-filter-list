import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { IFilterform } from '../../interfaces/filterform';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  filterOptions: IFilterform = {
    name: '', 
    date: {
      start: undefined,
      end: undefined,
    },
    status: undefined,
  };

  onFilterEmitt = output<IFilterform>({alias: 'onFilter'});

  updateFilter() {
    this.onFilterEmitt.emit(this.filterOptions)
  }
}
