import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../_models/ingredient.model';
import { ShoppingListService } from '../_services/shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    // this is only because we want to provide a copy of the Ingredients array
    // so we need to emit an event saying ingredients changed (in service)
    // ===> and subscribe here and do something to it when it happens
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
}
