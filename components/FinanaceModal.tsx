import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemedText } from './ThemedText'

const FinanceModel = () => {
  return (
    <View style={{ marginVertical: 10, margin: 10 }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#121212',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 32,
          padding: 10,
        }}
      >
        <ThemedText
          style={{ letterSpacing: 2, fontSize: 18, color: '#ffffff' }}
        >
          CONFIRM SPOT
        </ThemedText>
        <Image
          source={require('@/assets/images/rightarrow.png')}
          style={{ transform: 'translateX(-20deg)', marginTop: 5 }}
        />
      </TouchableOpacity>
    </View>
  )
}
export default FinanceModel
