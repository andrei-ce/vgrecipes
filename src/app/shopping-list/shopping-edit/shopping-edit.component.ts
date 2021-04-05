import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/_models/ingredient.model';
import { ShoppingListService } from 'src/app/_services/shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // local Refs
  @ViewChild('nameInput') nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput') amountInputRef: ElementRef | undefined;
  @ViewChild('unitInput') unitInputRef: ElementRef | undefined;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem(event: MouseEvent) {
    event?.preventDefault();
    const name: string = this.nameInputRef?.nativeElement.value;
    const amount: number = this.amountInputRef?.nativeElement.value;
    const unit: string = this.unitInputRef?.nativeElement.value;
    const newIngredient = new Ingredient(name, amount, unit);
    this.slService.addIngredient(newIngredient);
  }
}
