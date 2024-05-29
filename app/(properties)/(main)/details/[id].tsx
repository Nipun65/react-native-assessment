import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import IconWrapper from '@/components/IconWrapper'
import { Collapsible } from '@/components/Collapsible'
import FinanceModel from '@/components/FinanaceModal'
import PropertyDetail from '@/components/PropertyDetails'
import FinanceOptions from '@/components/FinancingOptions'
import {
  FEATUREDPROPERTIES,
  PROPERTYDETAILS,
} from '@/constants/Constants.utils'
import { ThemedText } from '@/components/ThemedText'
import { PropertyDetails } from '@/Interfaces'

const Details = () => {
  const { id } = useLocalSearchParams()
  const allProperties = [
    ...PROPERTYDETAILS,
    ...FEATUREDPROPERTIES.ongoing,
    ...FEATUREDPROPERTIES.comingsoon,
    ...FEATUREDPROPERTIES.closed,
  ]
  const detail = allProperties.find(
    (property: PropertyDetails) => property.id == id
  )

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <View style={styles.imgWrapper}>
            <View
              style={{
                position: 'absolute',
                top: 6,
                alignItems: 'center',
                zIndex: 10,
                flexDirection: 'row',
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                <IconWrapper
                  children={
                    <Image
                      source={require('@/assets/images/arrow.png')}
                      style={styles.icon}
                    />
                  }
                  handleButton={() => router.back()}
                />

                <View style={{ flexDirection: 'row', gap: 6 }}>
                  <IconWrapper
                    children={
                      <Image
                        source={require('@/assets/images/share.png')}
                        style={styles.icon}
                      />
                    }
                    handleButton={() => {}}
                  />
                  <IconWrapper
                    children={
                      <Image
                        source={require('@/assets/images/bookmark.png')}
                        style={styles.icon}
                      />
                    }
                    handleButton={() => {}}
                  />
                </View>
              </View>
            </View>
            <Image source={detail?.path} />
            <View style={{ position: 'absolute', bottom: 6, left: 6 }}>
              <ThemedText style={styles.name}>{detail?.name}</ThemedText>
              <ThemedText style={styles.city}>{detail?.city}</ThemedText>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              gap: 10,
              margin: 10,
            }}
          >
            <View style={styles.header}>
              <ThemedText style={styles.headerText}>
                First Floor Apartment in <ThemedText>{detail?.name}</ThemedText>
              </ThemedText>
              <ThemedText style={styles.infoText}>{detail?.details}</ThemedText>
            </View>

            <View style={[styles.details, styles.spacer]}>
              <View style={styles.detailItem}>
                <ThemedText style={styles.detailTitle}>Total Value</ThemedText>
                <ThemedText style={styles.detailValue}>
                  {detail?.totalValue}
                </ThemedText>
              </View>
              <View style={styles.detailItem}>
                <ThemedText style={styles.detailTitle}>
                  Price per share
                </ThemedText>
                <ThemedText style={styles.detailValue}>
                  {detail?.pricePerShare}
                </ThemedText>
              </View>
              <View style={styles.detailItem}>
                <ThemedText style={styles.detailTitle}>
                  Available spots
                </ThemedText>
                <ThemedText style={styles.detailValue}>72</ThemedText>
              </View>
            </View>
            <View style={[styles.spacer, styles.timeline]}>
              <ThemedText style={styles.timelineTitle}>
                Fund Raising Timeline
              </ThemedText>
              <View style={styles.timelineBar}>
                <Image
                  source={require('@/assets/images/clock.png')}
                  style={styles.icon}
                />
                <ThemedText style={styles.timelineText}>
                  Ends in 12 Days
                </ThemedText>
              </View>
            </View>

            {detail && (
              <>
                <Collapsible
                  title="Financing Options"
                  subTitle="Options for both Owners and Shareholders"
                  children={<FinanceOptions detail={detail} />}
                  image={
                    <Image
                      source={require('@/assets/images/financeOption.png')}
                    />
                  }
                />
                <Collapsible
                  title="Property Details"
                  subTitle="Flat type, square footage, location benefits, ame..."
                  children={<PropertyDetail property={detail} />}
                  image={
                    <Image
                      source={require('@/assets/images/propertydetail.png')}
                    />
                  }
                />
                <Collapsible
                  title="Financial Model"
                  subTitle="Indicators for capital appreciation, monthly yield etc."
                  children={<FinanceModel />}
                  image={
                    <Image
                      source={require('@/assets/images/dollar.png')}
                      style={{ height: 32, width: 32 }}
                    />
                  }
                  imageBg={false}
                />
              </>
            )}
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  gap: 12,
                  backgroundColor: '#00172A',
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                  paddingRight: 0,
                }}
              >
                <Image
                  source={require('@/assets/images/user.png')}
                  style={styles.userIcon}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View>
                    <ThemedText style={styles.mainText}>Akash Puri</ThemedText>
                    <ThemedText style={styles.subText}>
                      Seek guidance and an expert opinion from our specialists.
                    </ThemedText>
                  </View>

                  <Image
                    source={require('@/assets/images/rightarrow.png')}
                    style={{ transform: 'translateX(-20deg)' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  imgWrapper: {
    position: 'relative',
  },
  name: {
    fontSize: 26,
    fontWeight: '100',
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    color: '#ffffff',
  },
  city: {
    fontSize: 26,
    fontWeight: '400',
    color: '#ffffff',
    marginLeft: 10,
    marginTop: -14,
  },
  icon: {
    width: 15,
    height: 15,
  },
  header: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  headerText: {
    letterSpacing: -1,
    fontSize: 20,
    fontWeight: '300',
  },
  infoText: {
    fontSize: 12,
    fontWeight: '500',
  },
  spacer: {
    backgroundColor: '#ffffff',
  },
  details: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flex: 1,
    justifyContent: 'space-around',
  },
  detailTitle: {
    fontSize: 14,
    color: '#12121273',
    marginBottom: 5,
  },
  detailValue: {
    color: '#121212',
    fontWeight: '500',
    fontSize: 16,
  },
  timeline: { paddingHorizontal: 24, paddingVertical: 15 },
  timelineTitle: {
    fontSize: 14,
    color: '#12121273',
  },
  timelineBar: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  timelineText: {
    padding: 5,
    borderRadius: 5,
  },
  mainText: {
    color: '#ffffff',
    fontSize: 14,
  },
  userIcon: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  subText: {
    fontSize: 10,
    marginTop: 3,
    color: '#ffffff',
  },
})

export default Details
