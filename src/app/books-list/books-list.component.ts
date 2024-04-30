import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Input() isCollectMode: boolean = true;
  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();
}
