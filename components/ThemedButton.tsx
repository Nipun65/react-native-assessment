import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

interface ThemeButtonProps {
  title: string
  handleButton: () => void
  type: string
  children: React.ReactNode
  styles: StyleProp<ViewStyle> | undefined
}

const ThemeButton = ({
  title,
  handleButton,
  type,
  children,
  styles,
}: ThemeButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handleButton}
      style={type === 'secondary' ? styleComp.secondary : styleComp.default}
    >
      <View
        style={[
          {
            display: 'flex',
            flexDirection: 'row',
            gap: 12,
            alignItems: 'center',
            justifyContent: 'center',
          },
          styles,
        ]}
      >
        {children}
        <Text
          style={[
            type === 'secondary'
              ? styleComp.secondaryText
              : styleComp.defaultText,
            styles,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styleComp = StyleSheet.create({
  default: {
    backgroundColor: '#00172A',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  defaultText: {
    color: 'white',
    textAlign: 'center',
  },
  secondary: {
    borderColor: '#00172A',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  secondaryText: {
    color: '#121212',
  },
})

export default ThemeButton
