import React from 'react';
import {useSelector} from 'react-redux';

import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = (navData) => {
    return {
      title: 'Your Favorites',
      headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {
          navData.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    }
  }

export default FavoritesScreen;