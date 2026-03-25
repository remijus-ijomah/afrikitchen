// src/types.ts
export interface NutritionalInfo {
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  sodium: number;
  sugar: number;
}

export interface FoodDetails {
  category: string;
  img_url: string;
  nutritonal_information: NutritionalInfo;
}

export interface FoodResponse {
  [foodName: string]: FoodDetails;
}