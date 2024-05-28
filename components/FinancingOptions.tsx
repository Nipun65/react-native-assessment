import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ThemedText } from './ThemedText'

const FinanceOptions = ({ detail }: any) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image
          source={require('@/assets//images/financeOption.png')}
          style={{ marginBottom: 10 }}
        />
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <ThemedText style={styles.mainText}>
              Become a shareholder
            </ThemedText>
            <ThemedText style={styles.subText}>
              Own a share of this stunning growth-driven property.
            </ThemedText>
            <ThemedText style={{ color: '#12121240', fontSize: 8 }}>
              <ThemedText
                style={{
                  textDecorationLine: 'underline',
                  fontSize: 8,
                  color: '#12121240',
                }}
              >
                1 Share
              </ThemedText>{' '}
              (token) = $ 15,293
            </ThemedText>
          </View>
          <View style={styles.priceContainer}>
            <ThemedText
              style={[
                styles.price,
                { color: '#12121240', textDecorationLine: 'line-through' },
              ]}
            >
              {detail?.totalValue}
            </ThemedText>
            <ThemedText style={styles.price}>
              {detail?.pricePerShare}
            </ThemedText>
          </View>
        </View>
      </View>
      <View style={styles.serviceWrapper}>
        <Image
          source={require('@/assets/images/servicelogo.png')}
          style={styles.icon}
        />
        <View>
          <ThemedText style={styles.mainText}>
            Sotheby’s Financial Services
          </ThemedText>
          <ThemedText style={styles.subText}>
            Allow our team of experts to tailor the ideal financing option for
            you
          </ThemedText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  mainText: {
    color: '#121212',
    fontSize: 12,
  },
  subText: {
    fontSize: 8,
    color: '#121212BF',
  },
  icon: {
    height: 22,
    width: 22,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 14,
    color: '#121212',
    fontWeight: 'bold',
  },
  serviceWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginVertical: 15,
  },
})

export default FinanceOptions
