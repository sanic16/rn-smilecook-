import React, { useLayoutEffect } from 'react'
import { Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import { useGetRecipeQuery } from '../store/slices/recipeSlite'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import IconButton from '../components/IconButton'

const MealDetailsScreen = (
  {
    route,
    navigation,
  }:{
    route: any,
    navigation: any
  }
) => {
  const { id, title } = route.params
  const { data: recipe, isLoading, isError, error } = useGetRecipeQuery(id)

  const headerButtonPressHandler = () => {
    console.log('Mafer i love you baby!!!')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton 
            icon='star'
            color='hsl(30, 5%, 100%)'
            onPress={headerButtonPressHandler}
          />
        )
      },
    })
  }, [navigation, headerButtonPressHandler, ])

  if(!recipe){
    return(
      <Text>
        No data found
      </Text>
    )
  }

  return (
    <View>
      <ScrollView>
        <Image 
          source={{
            uri: recipe.cover_image
          }}
          style={styles.image}
        />
        <Text
          style={styles.title}
        >
            {recipe.name}
        </Text>
        <MealDetails 
          recipe={recipe} 
          textStyle={styles.detailText} 
          styleDetails={styles.details}         
        />
        <Subtitle subtitle='Description' />
        <Text style={styles.content}>
          {recipe.description}
        </Text> 
        <Subtitle subtitle='Directions' />
        
        <Text style={styles.content}>
          {recipe.directions}
        </Text>

        <Text>
          r
        </Text>
      </ScrollView>
    </View>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
    objectFit: 'cover'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  detailText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500'
  },
  details: {
    backgroundColor: 'hsl(30, 89%, 42%)',
    color: '#fff',
  },
  content: {
    marginVertical: 4,
    marginHorizontal: 8,
    color: '#fff'
  }
})