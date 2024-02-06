import { Text, View, FlatList } from "react-native"
import { useGetCategoriesQuery } from "../store/slices/categorySlice"
import CategoryGridTitle from "../components/CategoryGridTitle"
import { COLORS } from "../utils/constants"

const renderCategoryItem = (item: Category, color: string) => {
    return (
        <CategoryGridTitle
            title={item.name}
            color={color}
        />
    )
}

const CategoriesScreen = () => {
  const { data, error, isLoading } = useGetCategoriesQuery()

  const newData = data?.map(item => {
    return {
        ...item,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
    }
  })

  if (newData && newData.length % 2 !== 0){
    newData.push({
        id: newData[newData.length - 1].id + 1,
        name: '',
        color: 'transparent'
    })
  }
 

  return (
    <FlatList
        data={newData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderCategoryItem(item, item.color)}
        numColumns={2}   
    />
  )
}

export default CategoriesScreen