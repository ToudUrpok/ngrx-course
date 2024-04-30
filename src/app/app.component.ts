import { Component } from '@angular/core';
import { selectBooks, selectCollectedBooks } from './state/books.selectors';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { BooksService } from './books-list/books-service.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  collectedBooks$ = this.store.select(selectCollectedBooks);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBooksList({ books }))
      );
  }
}
