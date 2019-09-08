import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('pizza', 'Italian Dish', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Pizza_with_tomatoes.jpg'),
    new Recipe('pizza', 'Italian Dish', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Pizza_with_tomatoes.jpg'),
    new Recipe('pizza', 'Italian Dish', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Pizza_with_tomatoes.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
