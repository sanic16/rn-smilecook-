import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'

const IconButton = (
    {
        icon,
        color,
        onPress,
    }:{
        icon: typeof Ionicons.defaultProps,
        color: string,
        onPress: () => void 
    }
) => {
  return (
    <Pressable
        onPress={onPress}
        style={({pressed}) => [pressed && styles.pressed]}
    >
        <Ionicons 
            name={icon}
            size={24} 
            color={color}
        /> 
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})