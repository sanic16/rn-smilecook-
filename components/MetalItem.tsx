import { Text, View, Image, Pressable, StyleSheet, Platform  } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import MealDetails from "./MealDetails";

type RootStackParamList = {
    MealDetails: { id: number, title: string}; 
}

type navigationProp = NativeStackNavigationProp<RootStackParamList, 'MealDetails'> 
const MetalItem = (
    {
        recipe
    }:{
        recipe: Meal
    }
) => {
  
  const navigation = useNavigation<navigationProp>()
    
  const pressHandler = () => {
    console.log('hi')
    navigation.navigate('MealDetails', {
        id: recipe.id,
        title: recipe.name
    })
    
  }
  

  return (
    <View style={styles.mealItem}>
        <Pressable
            style={({pressed})=> [pressed && styles.buttonPressed]}
            onPress={pressHandler}
        >
            <View>
            <View>
                <Image
                    source={{uri: recipe.cover_image}}
                    style={styles.image}
                />
                <Text
                    style={styles.title}
                >
                    {recipe.name}
                </Text>
            </View>
            <MealDetails recipe={recipe} />
            </View>
        </Pressable>
        
    </View>
  )
}

export default MetalItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image:{
        width: '100%',
        height: 200
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    
})