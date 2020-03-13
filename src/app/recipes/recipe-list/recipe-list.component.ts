import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


 @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [

    new Recipe('test recipe',' a simple test recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6hxsP6_EzISOAE_dLoA1Ld5kMDFvU7QVxJUJUBpuFjYFou7GO'),

    new Recipe('test recipe',' a simple test recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf1Dp-9pCpQdsXxkw3wjUk5ep8ii1hFzARuuGFItD3JsQjWaxo')
  ]

  constructor() { }

  ngOnInit(): void {
  }


  onRecipeSelected(recipe: Recipe){

    this.recipeWasSelected.emit(recipe);

  }

}
