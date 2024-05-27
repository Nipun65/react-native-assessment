import { PROPERTYDETAILS } from "@/constants/Constants.utils";
import { router, useLocalSearchParams } from "expo-router";
// import { Text, TouchableOpacity, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import IconWrapper from "@/components/IconWrapper";
import { Collapsible } from "@/components/Collapsible";
import FinanceModel from "@/components/FinanaceModal";
import PropertyDetail from "@/components/PropertyDetails";
import FinanceOptions from "@/components/FinancingOptions";

const Details = () => {
  const { id } = useLocalSearchParams();
  const detail = PROPERTYDETAILS.find((property: any) => property.id == id);

  return (
    <GestureHandlerRootView>
      <View>
        <View style={styles.imgWrapper}>
          <View
            style={{
              position: "absolute",
              top: 6,
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <IconWrapper
                children={
                  <Image
                    source={require("@/assets/images/arrow.png")}
                    style={styles.icon}
                  />
                }
                handleButton={() => router.back()}
              />

              <View style={{ flexDirection: "row" }}>
                <IconWrapper
                  children={
                    <Image
                      source={require("@/assets/images/share.png")}
                      style={styles.icon}
                    />
                  }
                  handleButton={() => {}}
                />
                <IconWrapper
                  children={
                    <Image
                      source={require("@/assets/images/bookmark.png")}
                      style={styles.icon}
                    />
                  }
                  handleButton={() => {}}
                />
              </View>
            </View>
          </View>
          <Image source={detail?.path} />
          <View style={{ position: "absolute", bottom: 6, left: 6 }}>
            <Text style={styles.name}>{detail?.name}</Text>
            <Text style={styles.city}>{detail?.city}</Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{ flexDirection: "column" }}
          style={{ zIndex: -10, overflow: "scroll" }}
        >
          <View style={{ flexDirection: "column", gap: 10, margin: 10 }}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                First Floor Apartment in <Text>{detail?.name}</Text>
              </Text>
              <Text style={styles.infoText}>{detail?.details}</Text>
            </View>

            <View style={[styles.details, styles.spacer]}>
              <View style={styles.detailItem}>
                <Text style={styles.detailTitle}>Total Value</Text>
                <Text style={styles.detailValue}>{detail?.totalValue}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailTitle}>Price per share</Text>
                <Text style={styles.detailValue}>{detail?.pricePerShare}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailTitle}>Available spots</Text>
                <Text style={styles.detailValue}>72</Text>
              </View>
            </View>
            <View style={[styles.spacer, styles.timeline]}>
              <Text style={styles.timelineTitle}>Fund Raising Timeline</Text>
              <View style={styles.timelineBar}>
                <Image
                  source={require("@/assets/images/clock.png")}
                  style={styles.icon}
                />
                <Text style={styles.timelineText}>Ends in 12 Days</Text>
              </View>
            </View>

            <Collapsible
              title='Financing Options'
              subTitle='Options for both Owners and Shareholders'
              children={<FinanceOptions />}
              image={
                <Image source={require("@/assets/images/financeOption.png")} />
              }
            />
            <Collapsible
              title='Property Details'
              subTitle='Flat type, square footage, location benefits, ame...'
              children={<PropertyDetail />}
              image={
                <Image source={require("@/assets/images/propertydetail.png")} />
              }
            />
            <Collapsible
              title='Financial Model'
              subTitle='Indicators for capital appreciation, monthly yield etc.'
              children={<FinanceModel />}
              image={<Image source={require("@/assets/images/model.png")} />}
            />
            <View style={styles.expert}>
              <View style={styles.expertImage}></View>
              <View style={styles.expertText}>
                <Text style={styles.expertName}>Akash Puri</Text>
                <Text style={styles.expertDescription}>
                  Seek guidance and an expert opinion from our specialists.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  imgWrapper: {
    position: "relative",
  },
  name: {
    fontSize: 32,
    fontWeight: "100",
    fontStyle: "italic",
    color: "#ffffff",
  },
  city: {
    fontSize: 32,
    fontWeight: "400",
    color: "#ffffff",
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
    backgroundColor: "white",
  },
  headerText: {
    letterSpacing: -1,
    fontSize: 20,
    fontWeight: "300",
  },
  infoText: {
    fontSize: 12,
    fontWeight: "500",
  },

  info: {
    // marginBottom: 20,
  },
  link: {
    // color: "#007AFF",
  },
  spacer: {
    // marginBottom: 10,
    backgroundColor: "#ffffff",
    // marginHorizontal: 10,
  },
  details: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailItem: {
    flex: 1,
    justifyContent: "space-around",
  },
  detailTitle: {
    fontSize: 14,
    color: "#12121273",
    marginBottom: 5,
  },
  detailValue: {
    color: "#121212",
    fontWeight: "500",
    fontSize: 16,
  },
  timeline: { paddingHorizontal: 24, paddingVertical: 15 },
  timelineTitle: {
    fontSize: 14,
    color: "#12121273",
  },
  timelineBar: {
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
  },
  timelineText: {
    padding: 5,
    borderRadius: 5,
  },
  accordionItem: {
    // backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2, // Add shadow for iOS
    // shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  accordionHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  accordionIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  accordionContent: {
    marginTop: 10,
  },
  accordionText: {
    fontSize: 14,
  },
  expert: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  expertImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  expertText: {
    flex: 1,
  },
  expertName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  expertDescription: {
    fontSize: 14,
  },
});

export default Details;
