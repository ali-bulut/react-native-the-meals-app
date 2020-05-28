import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

import Colors from "../constants/Colors";

//Screens are managed as a stack of pages/screens. The top-most screen(in this case that is Categories)
//is the one we see. So when the app starts, firstly we will see the Categories Screen.

{
  /* there are lots of props that is coming from helps of the react-navigation. */
}
{
  /* routeName is coming from our identifiers on MealsNavigator.js . Here simply when we click 
            the button the page will be changed and will go on CategoryMealsScreen*/
}
{
  /* props.navigation.navigate('CategoryMeals') -> this usage is also works. */
}
{
  /* props.navigation.push('CategoryMeals') -> that's same with navigate. Only difference 
            by using this we can go and go on same screen. But by using navigate if you are on the screen
            which is the same with route, the button cannot do anything. But by using push you can go to 
            same screen again. That is used for folders! Same screen different contents. Keep in mind. */
}
{
  /* props.navigation.goBack() or props.navigation.pop() -> by using those you are able to go
            back. goBack() is used for every navigators but pop is only used for stack navigator. In this case 
            we are free to use both.  */
}
{
  /* props.navigation.popToTop() -> you can go back to top route. In this case CategoriesScreen which
            we identified this in MealsNavigator.js file by writing the top of the routes list. */
}
{
  /* props.navigation.replace() -> if we use this the stack will be empty. So there wont any back
            button or even we write pop() the button will be useless. So it's acting like the top-most component. */
}
//as a second argument we can pass the styles of navigation. It will be applied for all routes/screens we wrote.
const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    //by using this we are able to change the screen which will be started at the beggining. 
    //Normally it's the top-most route (in this case Categories)
    // initialRouteName:'CategoryMeals',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigator);
