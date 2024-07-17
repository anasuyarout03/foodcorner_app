import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods
  }
  
  // search Food
  getAllFoodBySearchTerm(searchTerm: string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  // get food by id
  getFoodById(foodId:string){
    return this.getAll().find(food => food.id == foodId)?? new Food();
  }
}
