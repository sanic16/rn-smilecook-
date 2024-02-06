import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'

const CategoryGridTitle = (
    {
        title,
        color
    }:{
        title: string,
        color: string
    }
) => {
  return (
    <View style={styles.gridItem}>
        <Pressable>
            <View>
                <Text>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTitle

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
    }
})