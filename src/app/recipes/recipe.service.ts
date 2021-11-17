import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
