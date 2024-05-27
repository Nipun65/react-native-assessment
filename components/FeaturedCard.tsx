import React from "react";
import { View, Image, Text, StyleSheet, ViewBase } from "react-native";
import Separator from "./Separator";

const FeaturedCard = ({ property, tabName }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={property.path}
          blurRadius={tabName === "coming soon" ? 1 : 0}
          style={[styles.image]}
        />
      </View>
      <View style={styles.propertyDetails}>
        <View>
          <Text>
            <Text
              style={[
                styles.headingName,
                (tabName === "coming soon" || tabName === "closed") &&
                  styles.disabled,
              ]}
            >
              {property?.name},{" "}
            </Text>
            <Text style={styles.headingCity}> {property?.city}</Text>
          </Text>
        </View>
        <View style={[styles.column, { marginTop: 12 }]}>
          <View>
            <Text style={styles.info}>Starting At</Text>
            <Text
              style={[
                styles.details,
                (tabName === "coming soon" || tabName === "closed") &&
                  styles.disabled,
              ]}
            >
              {property.startingAt}
            </Text>
          </View>
          <View>
            <Text style={styles.info}>Total Value</Text>
            <Text
              style={[
                styles.details,
                (tabName === "coming soon" || tabName === "closed") &&
                  styles.disabled,
              ]}
            >
              {property.totalValue}
            </Text>
          </View>

          <View>
            <Text style={styles.info}>People Registered</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={[
                  styles.details,
                  (tabName === "coming soon" || tabName === "closed") &&
                    styles.disabled,
                ]}
              >
                {tabName === "coming soon" ? (
                  <Text style={{ textAlign: "center", flex: 1 }}>-</Text>
                ) : (
                  property.registered
                )}
              </Text>
              {tabName !== "coming soon" && (
                <View>
                  <Text
                    style={{
                      color:
                        tabName === "coming soon" || tabName === "closed"
                          ? "#1212124D"
                          : "#12121259",
                    }}
                  >
                    /
                    <Text style={styles.details}>
                      {property.totalRegistration}
                    </Text>
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>

        <View style={styles.column}>
          <View>
            <Text
              style={[
                styles.bottomdetails,
                (tabName === "coming soon" || tabName === "closed") &&
                  styles.disabled,
              ]}
            >
              {property.bedrooms} Bedrooms
            </Text>
          </View>
          <Separator />
          <View>
            <Text
              style={[
                styles.bottomdetails,
                (tabName === "coming soon" || tabName === "closed") &&
                  styles.disabled,
              ]}
            >
              {property.bedrooms} Bath
            </Text>
          </View>
          <Separator />
          <View>
            <Text
              style={[
                styles.bottomdetails,
                (tabName === "coming soon" || tabName === "closed") &&
                  styles.disabled,
              ]}
            >
              {property.bedrooms} Sqft
            </Text>
          </View>
          <Separator />
          <View>
            <Text
              style={[
                styles.bottomdetails,
                (tabName === "coming soon" || tabName === "closed") &&
                  styles.disabled,
              ]}
            >
              {property.bedrooms} Acre
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
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
  details: {
    fontWeight: "500",
    fontSize: 10,
  },
  column: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingName: {
    color: "#121212",
    fontSize: 14,
  },
  headingCity: {
    fontWeight: "100",
    color: "#121212",
    fontSize: 14,
  },
  price: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  info: {
    color: "#12121259",
    fontSize: 10,
    marginBottom: 4,
  },
  bottomdetails: {
    fontSize: 10,
    color: "#121212BF",
  },
  separator: {
    marginHorizontal: 1,
  },
  disabled: {
    color: "#1212124D",
  },
  imageblue: {},
});

export default FeaturedCard;
