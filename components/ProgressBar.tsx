import { View, StyleSheet } from 'react-native'

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    width: '100%',
  },
  progress: {
    padding: 8,
    backgroundColor: '#121212',
    width: '60%',
  },
})

export default ProgressBar
