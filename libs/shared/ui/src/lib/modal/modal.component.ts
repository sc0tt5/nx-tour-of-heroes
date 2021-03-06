import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'shrd-ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent<T> {
  @Input() primaryBtn = 'Delete';
  @Input() secondaryBtn = 'Cancel';
  @Input() header = 'Delete hero?';
  @Input() message = 'Select delete to remove the hero from the database';

  @Output() confirm: EventEmitter<T> = new EventEmitter<T>();

  item: T;
  modalIsVisible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  closeModal(): void {
    this.modalIsVisible = false;
  }

  confirmAction(): void {
    this.confirm.emit(this.item);
    this.modalIsVisible = false;
  }

  open(item: T): void {
    this.item = item;
    this.modalIsVisible = !!this.item;
    this.cdr.markForCheck();
  }
}
