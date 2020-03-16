import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

recipe: Recipe;
id: number;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params )=>{

      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipes(this.id);
    })
  }

  onAddedToShoppingList(){

    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }

}
