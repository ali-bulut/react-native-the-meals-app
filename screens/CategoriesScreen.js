import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CategoriesScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen!</Text>
            {/* there are lots of props that is coming from helps of the react-navigation. */}
            {/* routeName is coming from our identifiers on MealsNavigator.js . Here simply when we click 
            the button the page will be changed and will be gone on CategoryMealsScreen*/}
            {/* props.navigation.navigate('CategoryMeals') -> this usage is also works. */}
            <Button title="Go to Meals" onPress={() => {props.navigation.navigate({routeName: 'CategoryMeals'})}} />
        </View>
    );
};

const styles = StyleSheet.create({  
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default CategoriesScreen;