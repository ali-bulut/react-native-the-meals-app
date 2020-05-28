import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {

  //we can reach the params that is passed from navigate props on CategoriesScreen.
  const categoryId = props.navigation.getParam("categoryId");

  //if categoryId is not the part of meal the number will be -1. So we filter for equal or greater than 0
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((c) => c.id === categoryId);

  return {
    title: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
