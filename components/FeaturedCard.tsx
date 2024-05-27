import React from "react";
import { View, Image, Text, StyleSheet, ViewBase } from "react-native";

const FeaturedCard = ({ property }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={property.path} style={styles.image} />
      </View>
      <View style={styles.propertyDetails}>
        <View>
          <Text>
            <Text style={styles.headingName}>{property?.name}</Text>
            <Text style={styles.headingCity}> {property?.city}</Text>
          </Text>
        </View>
        <View style={styles.column}>
          <View style={styles.info}>
            <Text style={styles.info}>Starting At</Text>
            <Text>{property.startingAt}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.info}>Total Value</Text>
            <Text>{property.totalValue}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.info}>Registered</Text>
            <Text>{property.registered}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.info}>People Registered</Text>
            <Text>{property.peopleRegistered}</Text>
          </View>
        </View>

        <View style={styles.column}>
          <View>
            <Text style={styles.info}>Bedrooms</Text>
            <Text>{property.bedrooms}</Text>
          </View>
          <View>
            <Text style={styles.info}>Bath</Text>
            <Text>{property.bath}</Text>
          </View>
          <View>
            <Text style={styles.info}>Acre</Text>
            <Text>{property.acre}</Text>
          </View>

          <View>
            <Text style={styles.info}>Sqft</Text>
            <Text>{property.sqft}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#fffffff",
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
    flexDirection: "column",
  },
  column: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingName: {
    color: "#121212",
    fontSize: 16,
  },
  headingCity: {
    fontWeight: "100",
    color: "#121212",
    fontSize: 16,
  },
  price: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  info: {
    marginBottom: 4,
  },
});

export default FeaturedCard;
