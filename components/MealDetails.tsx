import React from 'react'
import { StyleSheet, Text, View, TextStyle, ViewStyle } from 'react-native'

const MealDetails = (
    {
        recipe,
        styleDetails,
        textStyle
    }:{
        recipe: Meal,
        styleDetails?: ViewStyle
        textStyle?: TextStyle 
    }
) => {
  return (
    <View style={[styles.details, styleDetails]}>
        <Text style={[styles.detailItem, textStyle ]}>
            {recipe.cook_time} m
        </Text>
        <Text style={[styles.detailItem, textStyle ]}>
            {recipe.cook_time > 60 ? 'Easy' : 'Hard'}
        </Text>
        <Text style={[styles.detailItem, textStyle ]}>
            {recipe.num_of_servings} servings
        </Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
    details:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 8
    },
    detailItem: {
        fontSize: 12,

    }
})