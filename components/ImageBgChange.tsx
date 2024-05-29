import { StyleSheet, View } from 'react-native'

interface ImageBgChangeProps {
  children: React.ReactNode
}

const ImageBgChange = ({ children }: ImageBgChangeProps) => {
  return <View style={styles.wrapper}>{children}</View>
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
  },
})
export default ImageBgChange
