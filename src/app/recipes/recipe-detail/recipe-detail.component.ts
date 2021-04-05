import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/_models/ingredient.model';
import { Recipe } from 'src/app/_models/recipe.model';
import { ShoppingListService } from 'src/app/_services/shoppingList.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // input is incoming data from parents
  // output is data going to parent component

  // ! here enforces that we know it can be undefined, but this will only load if not (handled elsewhere)
  @Input() recipe!: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  addToShoppingList() {
    this.recipe.ingredients.forEach((ingredient) => {
      this.shoppingListService.addIngredient(ingredient);
    });
  }
}
