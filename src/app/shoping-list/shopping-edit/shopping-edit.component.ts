import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @ViewChild('unitsInput', { static: false }) unitsInputRef: ElementRef;

  /* @Output() ingredientAdded = new EventEmitter<Ingredient>() */

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingUnits = this.unitsInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount, ingUnits);
    /* this.ingredientAdded.emit(newIngredient) */
    this.slService.addIngredient(newIngredient);
  }
}
