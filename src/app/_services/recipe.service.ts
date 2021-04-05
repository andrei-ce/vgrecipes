import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../_models/ingredient.model';
import { Recipe } from '../_models/recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Normal fried eggs',
      'If you are reading how to cook an egg you are dumb AF',
      'https://goop-img.com/wp-content/uploads/2015/03/eggs-fried.jpg',
      [new Ingredient('Eggs', 2, 'units'), new Ingredient('Salt', 10, 'g')]
    ),
    new Recipe(
      'Another Recipe',
      'Delicious whatever food this is a recipe for',
      'https://realfood.tesco.com/media/images/RFO-Main-472x310-Carrots-f1929216-f6ff-474c-b709-f2c4359c4667-0-472x310.jpg',
      [new Ingredient('Rice', 500, 'g'), new Ingredient('Meat', 200, 'g')]
    ),
  ];

  getRecipes() {
    // this will be a new Array (copy) of the array (with the .slice method)
    return this.recipes.slice();
  }

  selectRecipe() {}
}
