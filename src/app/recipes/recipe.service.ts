import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  constructor(private slService: ShoppingListService) {

  }

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('pizza', 'Italian Dish', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Pizza_with_tomatoes.jpg', [new Ingredient('Sauce', 1), new Ingredient('Cheese', 2)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
