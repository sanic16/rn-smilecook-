import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Subtitle = (
    {
        subtitle
    }:{
        subtitle: string
    }
) => {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>
            {subtitle}
        </Text>
    </View>  
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitleContainer: {
        marginVertical: 4,
        marginHorizontal: 24,
        padding: 6,
        borderBottomWidth: 2,
        borderBottomColor: 'hsl(30, 89%, 52%)',
      },
    
      subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        
      }
})