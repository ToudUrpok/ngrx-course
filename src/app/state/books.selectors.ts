import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../models/book.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollection = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectCollectedBooks = createSelector(
  selectBooks,
  selectCollection,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);
