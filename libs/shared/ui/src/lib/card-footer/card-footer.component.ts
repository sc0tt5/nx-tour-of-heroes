import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nx-demo-card-footer',
  templateUrl: './card-footer.component.html'
})
export class CardFooterComponent<T> {
  @Input() item: T;
  @Output() deleted = new EventEmitter<T>();
  @Output() selected = new EventEmitter<T>();

  faEdit = faEdit;
  faTrash = faTrash;

  deleteItem(item: T) {
    this.deleted.emit(item);
  }

  selectItem(item: T) {
    this.selected.emit(item);
  }
}
