import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples",5,"units"),
    new Ingredient("Tomatos",10,"units")
  ]


  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient:Ingredient) {
    this.ingredients.push(ingredient)
  }

}
