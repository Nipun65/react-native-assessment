import { StyleSheet, Text, View } from 'react-native'
import { ThemedText } from './ThemedText'
import Separator from './Separator'

const PropertyDetail = ({ property }: any) => {
  return (
    <View style={styles.row}>
      <View>
        <ThemedText style={[styles.bottomdetails]}>
          {property.bedrooms} Bedrooms
        </ThemedText>
      </View>
      <Separator />
      <View>
        <ThemedText style={[styles.bottomdetails]}>
          {property.bath} Bath
        </ThemedText>
      </View>
      <Separator />
      <View>
        <ThemedText style={[styles.bottomdetails]}>
          {property.sqft} Sqft
        </ThemedText>
      </View>
      <Separator />
      <View>
        <ThemedText style={[styles.bottomdetails]}>
          {property.acre} Acre (s)
        </ThemedText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomdetails: {
    fontSize: 10,
    color: '#121212BF',
  },
  separator: {
    marginHorizontal: 1,
  },
  disabled: {
    color: '#1212124D',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
})
export default PropertyDetail
