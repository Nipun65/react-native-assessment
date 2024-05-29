import React from 'react'
import { Link } from 'expo-router'
import { View, Image, StyleSheet } from 'react-native'
import Separator from './Separator'
import { ThemedText } from './ThemedText'
import { PropertyDetails } from '@/Interfaces'

interface FeaturedCardProps {
  property: PropertyDetails
  tabName: string
}

const FeaturedCard = ({ property, tabName }: FeaturedCardProps) => {
  return (
    <Link href={`/details/${property?.id}`}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={property.path}
            blurRadius={tabName === 'coming soon' ? 1 : 0}
            style={[styles.image]}
          />
        </View>
        <View style={styles.propertyDetails}>
          <View>
            <ThemedText>
              <ThemedText
                style={[
                  styles.headingName,
                  (tabName === 'coming soon' || tabName === 'closed') &&
                    styles.disabled,
                ]}
              >
                {property?.name},{' '}
              </ThemedText>
              <ThemedText
                style={[
                  styles.headingCity,
                  (tabName === 'coming soon' || tabName === 'closed') &&
                    styles.disabled,
                ]}
              >
                {property?.city}
              </ThemedText>
            </ThemedText>
          </View>
          <View style={[styles.row, { marginTop: 12 }]}>
            <View>
              <ThemedText style={styles.info}>Starting At</ThemedText>
              <ThemedText
                style={[
                  styles.details,
                  (tabName === 'coming soon' || tabName === 'closed') &&
                    styles.disabled,
                ]}
              >
                {property.startingAt}
              </ThemedText>
            </View>
            <View>
              <ThemedText style={styles.info}>Total Value</ThemedText>
              <ThemedText
                style={[
                  styles.details,
                  (tabName === 'coming soon' || tabName === 'closed') &&
                    styles.disabled,
                ]}
              >
                {property.totalValue}
              </ThemedText>
            </View>

            <View>
              <ThemedText style={styles.info}>People Registered</ThemedText>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ThemedText
                  style={[
                    styles.details,
                    (tabName === 'coming soon' || tabName === 'closed') &&
                      styles.disabled,
                  ]}
                >
                  {tabName === 'coming soon' ? (
                    <ThemedText
                      style={[
                        { textAlign: 'center', flex: 1 },
                        (tabName === 'coming soon' || tabName === 'closed') &&
                          styles.disabled,
                      ]}
                    >
                      -
                    </ThemedText>
                  ) : (
                    property.registered
                  )}
                </ThemedText>
                {tabName !== 'coming soon' && (
                  <View>
                    <ThemedText
                      style={{
                        color:
                          tabName === 'coming soon' || tabName === 'closed'
                            ? '#1212124D'
                            : '#12121259',
                      }}
                    >
                      /
                      <ThemedText
                        style={[
                          styles.details,
                          (tabName === 'coming soon' || tabName === 'closed') &&
                            styles.disabled,
                        ]}
                      >
                        {property.totalRegistration}
                      </ThemedText>
                    </ThemedText>
                  </View>
                )}
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View>
              <ThemedText
                style={[
                  styles.bottomdetails,
                  (tabName === 'coming soon' || tabName === 'closed') &&
                    styles.disabled,
                ]}
              >
                {property.bedrooms} Bedrooms
              </ThemedText>
            </View>
            <Separator />
            <View>
              <ThemedText
                style={[
                  styles.bottomdetails,
                  (tabName === 'coming soon' || tabName === 'closed') &&
                    styles.disabled,
                ]}
              >
                {property.bath} Bath
              </ThemedText>
            </View>
            <Separator />
            <View>
              <ThemedText
                style={[
                  styles.bottomdetails,
                  (tabName === 'coming soon' || tabName === 'closed') &&
                    styles.disabled,
                ]}
              >
                {property.sqft} Sqft
              </ThemedText>
            </View>
            <Separator />
            <View>
              <ThemedText
                style={[
                  styles.bottomdetails,
                  (tabName === 'coming soon' || tabName === 'closed') &&
                    styles.disabled,
                ]}
              >
                {property.acre} Acre (s)
              </ThemedText>
            </View>
          </View>
        </View>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  imageContainer: {
    marginRight: 12,
  },
  image: {
    width: 100,
    height: 100,
  },
  propertyDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  details: {
    fontWeight: '500',
    fontSize: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingName: {
    color: '#121212',
    fontSize: 14,
  },
  headingCity: {
    fontWeight: '100',
    color: '#121212',
    fontSize: 14,
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    color: '#12121259',
    fontSize: 10,
    marginBottom: 4,
  },
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
})

export default FeaturedCard
