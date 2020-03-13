import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;

  @ViewChild('amountInput') amountInputRef: ElementRef;


  @Output() ingrediateAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){

    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    const newIngrediant = new Ingredient(ingName,ingAmount);

    this.ingrediateAdded.emit(newIngrediant);

  }

}
