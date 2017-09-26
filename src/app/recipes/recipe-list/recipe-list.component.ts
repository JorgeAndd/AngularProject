import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Rice', 'Just rice', 'https://upload.wikimedia.org/wikipedia/commons/d/d6/A_bowl_of_rice.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
