import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text} from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons'
import { FavoritesContextProvider } from './context/store';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'hsl(30, 89%, 42%)'
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        sceneContainerStyle: {
          backgroundColor: 'hsl(55, 89%, 80%)'
        },
        drawerContentStyle: {
          backgroundColor: 'hsl(55, 89%, 80%)'
        },
        drawerActiveTintColor: 'hsl(30, 89%, 42%)',
        drawerInactiveTintColor: 'hsl(55, 5%, 32%)'
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name='fast-food' size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name='star' size={size} color={color} />
          )
        }}
      />

    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='MealsCategories'
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'hsl(30, 89%, 42%)'
              },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: 'hsl(55, 89%, 80%)',
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'stretch'
              }
            }}
          >
            <Stack.Screen 
              name='DrawerScreen' 
              component={DrawerNavigator} 
              options={{
                // title: 'All Categories',
                headerShown: false
              }} 
            />  
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
              // options = {({navigation, route}) => {
              //   if (route.params === undefined) {
              //     return {
              //       title: 'Meals Overview'
              //     }
              //   }
                

              //   const { title } = route.params
              //   return {
              //     title: title
              //   } 
              // }}
            />
             <Stack.Screen
              name='MealDetails'
              component={MealDetailsScreen}
              options={{
                title: 'Acerca de la receta',
                contentStyle: {
                  backgroundColor: 'hsl(55, 5%, 16%)'
                }
              }}
            />
          </Stack.Navigator>
         
        </NavigationContainer>
      </Provider>
      </FavoritesContextProvider> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
