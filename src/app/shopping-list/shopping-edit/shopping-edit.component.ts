import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/_models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // outgoing data
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  // local Refs
  @ViewChild('nameInput') nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput') amountInputRef: ElementRef | undefined;

  constructor() {}

  ngOnInit() {}

  onAddItem(event: MouseEvent) {
    event?.preventDefault();
    const name: string = this.nameInputRef?.nativeElement.value;
    const amount: number = this.amountInputRef?.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(ingredient);
  }
}
