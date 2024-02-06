import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useGetCategoriesQuery } from './store/slices/categorySlice';
import { Provider } from 'react-redux';
import store from './store/store';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {

  return (
    <Provider store={store}>
      <CategoriesScreen />
    </Provider> 
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
