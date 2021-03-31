import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // input is incoming data from parents
  // output is data going to parent component

  // ! here enforces that we know it can be undefined, but this will only load if not (handled elsewhere)
  @Input() recipe!: Recipe;

  constructor() { }

  ngOnInit() {
  }

}