import React from "react";
import {useSelector} from 'react-redux';

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = (props) => {

  //we can reach the params that is passed from navigate props on CategoriesScreen.
  const categoryId = props.navigation.getParam("categoryId");

  //we get data from redux.
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  //if categoryId is not the part of meal the number will be -1. So we filter for equal or greater than 0
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );
    if(displayedMeals.length === 0){
      return (<View style={styles.content}>
          <DefaultText>No meals found. Maybe check your filters?</DefaultText>
      </View>)
    }

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

const styles = StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default CategoryMealsScreen;
