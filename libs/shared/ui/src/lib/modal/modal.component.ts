import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() set show(item: T) {
    this.item = item;
    this.modalIsVisible = !!this.item;
  }

  @Output() confirm: EventEmitter<T> = new EventEmitter<T>();

  item: T;
  modalIsVisible = false;

  closeModal(): void {
    this.modalIsVisible = false;
  }

  confirmAction(): void {
    this.confirm.emit(this.item);
    this.modalIsVisible = false;
  }
}
