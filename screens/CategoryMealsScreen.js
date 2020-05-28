import React from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';

const CategoryMealsScreen = (props) => {

    const renderMealItem = (itemData) => {
        return (
            <View><Text> {itemData.item.title} </Text></View>
        );
    }

    //we can reach the params that is passed from navigate props on CategoriesScreen.
    const categoryId = props.navigation.getParam('categoryId');

    //if categoryId is not the part of meal the number will be -1. So we filter for equal or greater than 0
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item,index) => item.id} renderItem={renderMealItem} />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(c => c.id === categoryId);

    return {
        title: selectedCategory.title
    }
}

const styles = StyleSheet.create({  
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default CategoryMealsScreen;