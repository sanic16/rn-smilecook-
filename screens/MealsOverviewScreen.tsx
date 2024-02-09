import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useGetCategoryWithMealsQuery } from '../store/slices/categorySlice'
import MetalItem from '../components/MetalItem'

const MealsOverviewScreen = (
    {
        navigation,
        route,
    }:{
        navigation: any,
        route: any
    }
) => {
  const categoryId = route.params.categoryId
  const title = route.params.title

  useLayoutEffect(() => {
    navigation.setOptions({
        title: title
    })
  }, [navigation, title])

  const { data } = useGetCategoryWithMealsQuery(categoryId)

  console.log(data)
  
  if(data && data.recipes.length > 0){
  return (
    <View style={styles.container}>
        <FlatList
            data={data?.recipes}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <MetalItem recipe={item} />}
        /> 
        
    </View>
  )
}
    return(
        <Text>
            No meals found
        </Text>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,

    }
})