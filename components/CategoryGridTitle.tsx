import React from 'react'
import { Pressable, Text, View, StyleSheet, Platform } from 'react-native'

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
    <View style={[styles.gridItem]}>
        <Pressable 
            // android_ripple={{color: 'rgba(0, 0, 0, 0.2'}}
            style={({pressed}) => [styles.buttonContainer, pressed && styles.buttonPressend ]}
        >
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>
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
        borderRadius: 12,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible', 
    },
    buttonContainer: {
        flex: 1,
    },
    buttonPressend: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})