import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  /*  recipeSelected = new Subject<Recipe>(); */
  recipesChanged$$ = new Subject<Recipe[]>();

  /*   private recipes: Recipe[] = [
    new Recipe(
      'Lomo Saltado',
      'Peruvian Dish made from beef and potatos',
      'https://veggienoob.com/wp-content/uploads/2019/09/lomo-saltdo-vegano.jpg',
      [new Ingredient('Meat', 1, 'Kg'), new Ingredient('Potatos', 2, 'Kg')]
    ),
    new Recipe(
      'Ceviche',
      'Peruvian Dish made from fish, lemon and onions',
      'https://www.pequerecetas.com/wp-content/uploads/2019/02/ceviche-receta.jpg',
      [new Ingredient('Fish', 1.3, 'Kg'), new Ingredient('Lemon', 10, 'Units')]
    ),
  ]; */

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged$$.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged$$.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged$$.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged$$.next(this.recipes.slice());
  }
}
