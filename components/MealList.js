import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {

    const renderMealItem = (itemData) => {
        return (
          <MealItem
            title={itemData.item.title}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            duration={itemData.item.duration}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
                props.navigation.navigate({routeName: 'MealDetails', params:{
                    mealId: itemData.item.id
                }})
            }}
          />
        );
      };


  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: "100%" }}
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:15
      },
});

export default MealList;
