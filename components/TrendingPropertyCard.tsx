import { Image, StyleSheet, View } from 'react-native'
import Separator from './Separator'
import { Link } from 'expo-router'
import { ThemedText } from './ThemedText'
import { PropertyDetails } from '@/Interfaces'

interface TrendingPropertyCardProps {
  data: PropertyDetails
}

const TrendingPropertyCard = ({ data }: TrendingPropertyCardProps) => {
  return (
    <Link href={`/details/${data.id}`}>
      <View style={styles.container}>
        <Image source={data?.path} style={styles.image} />
        <View style={styles.textContainer}>
          <ThemedText style={styles.name}>{data.name}</ThemedText>
          <ThemedText style={styles.city}>{data.city}</ThemedText>
          <View style={styles.detailsContainer}>
            <ThemedText style={styles.details}>{data.sqft} Sqft</ThemedText>
            <Separator />
            <ThemedText style={styles.details}>{data.acre} Acre(s)</ThemedText>
          </View>
          <View style={styles.detailsContainer}>
            <ThemedText style={[styles.fractionInvestment]}>
              {data?.fractionalInvestment ? (
                <Image
                  source={require('@/assets/images/check.png')}
                  style={styles.crosscheck}
                />
              ) : (
                <Image
                  source={require('@/assets/images/cross.png')}
                  style={styles.crosscheck}
                />
              )}
              <ThemedText style={styles.separator}> </ThemedText>{' '}
              <ThemedText style={styles.fractionInvestment}>
                Fractional Investment Available
              </ThemedText>
            </ThemedText>
            <ThemedText style={styles.separator}> </ThemedText>
            <ThemedText style={styles.registered}>
              <Image
                source={require('@/assets/images/register.png')}
                style={styles.crosscheck}
              />
              <ThemedText style={styles.separator}> </ThemedText>
              {data?.registered} people registered
            </ThemedText>
          </View>
        </View>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: 400,
    height: 250,
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    padding: 10,
    borderRadius: 5,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  city: {
    color: 'white',
    fontSize: 16,
    fontWeight: '100',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 12,
  },
  details: {
    fontSize: 14,
    color: '#FFFFFF99',
  },
  separator: {
    marginHorizontal: 5,
  },
  fractionInvestment: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
    flexDirection: 'row',
    color: '#EBE7D3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 2,
    fontSize: 10,
  },
  registered: {
    backgroundColor: '#EBE7D3',
    color: '#121212',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 2,
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  crosscheck: {
    height: 10,
    width: 10,
  },
})

export default TrendingPropertyCard
