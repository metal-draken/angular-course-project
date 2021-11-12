import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe("A test recipe", "This is a simple description", "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a"),
    new Recipe("Another Test recipe", "This is a simple description 2", "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
