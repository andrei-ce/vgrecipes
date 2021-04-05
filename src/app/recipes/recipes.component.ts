import { Component, OnInit } from '@angular/core';
import { Recipe } from '../_models/recipe.model';
import { RecipeService } from '../_services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | undefined;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => (this.selectedRecipe = recipe)
    );
  }

  displayRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
