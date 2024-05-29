import { StyleSheet, View } from 'react-native'
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler'
import { FeaturedTab } from '@/components/FeatureProperties'
import HorizotalLine from '@/components/HorizontalLine'
import { ThemedText } from '@/components/ThemedText'
import TrendingPropertyCard from '@/components/TrendingPropertyCard'
import { PROPERTYDETAILS } from '@/constants/Constants.utils'
import { PropertyDetails } from '@/Interfaces'

const Main = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <ThemedText style={styles.mainText}>DISCOVER</ThemedText>
          <HorizotalLine />
        </View>
        <ScrollView>
          <View style={styles.trendingWrapper}>
            <ThemedText
              style={{
                fontWeight: '500',
                color: '#121212',
                fontSize: 24,
                letterSpacing: -1,
              }}
            >
              Trending Properties
            </ThemedText>
            <ThemedText
              style={{ color: '#12121266', fontSize: 12, marginBottom: 12 }}
            >
              Check out prime real estate shares that are being noticed
            </ThemedText>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ flexDirection: 'row' }}
              style={{ gap: 2 }}
            >
              {PROPERTYDETAILS.map((property: PropertyDetails) => {
                return (
                  <View key={property?.id}>
                    <TrendingPropertyCard data={property} />
                  </View>
                )
              })}
            </ScrollView>
          </View>
          <View style={styles.trendingWrapper}>
            <ThemedText style={{ fontWeight: '600', fontSize: 20 }}>
              Featured Properties
            </ThemedText>
            <FeaturedTab />
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  mainText: {
    textDecorationStyle: 'solid',
    fontSize: 28,
    fontWeight: '300',
    paddingHorizontal: 18,
    paddingVertical: 12,
    letterSpacing: -2,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
  },
  trendingWrapper: {
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    paddingTop: 20,
  },
})

export default Main
