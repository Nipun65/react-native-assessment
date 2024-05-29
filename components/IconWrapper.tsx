import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface IconWrapperProps {
  children: React.ReactNode
  handleButton: () => void
}

const IconWrapper = ({ children, handleButton }: IconWrapperProps) => {
  return (
    <TouchableOpacity onPress={handleButton} style={styles.circle}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#12121259',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default IconWrapper
