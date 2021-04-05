import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../_models/ingredient.model';

@Injectable()
export class ShoppingListService {
  // this is only because we dont want to remove .slice() from ingredients array
  // I.e. we want to continue to provide a copy of the array,
  // but inform it changed when it changes
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, 'units'),
    new Ingredient('Tomatoes', 10, 'units'),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
