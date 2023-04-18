import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { I18ns } from 'src/app/core/utils/i18n/I18n';
import { memoize } from 'src/app/core/utils/memoize/memoize';

@Component({
  selector: 'alto-status-pill',
  templateUrl: './status-pill.component.html',
  styleUrls: ['./status-pill.component.scss'],
})
export class StatusPillComponent implements OnChanges {
  @Input() startDate!: Date;
  @Input() endDate!: Date;

  loaded = false;
  class = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.loaded = true;
    this.class = this.getColor();
  }

  getColor() {
    if (this.startDate > new Date()) {
      return 'incoming';
    } else if (this.startDate < new Date() && this.endDate > new Date()) {
      return 'ongoing';
    } else if (this.endDate < new Date()) {
      return 'ended';
    }
    return '';
  }

  @memoize()
  getLabel(cls: string) {
    return I18ns.shared.status[cls as keyof typeof I18ns.shared.status];
  }
}