import FeatureProperties, { FeaturedTab } from "@/components/FeatureProperties";
import FeaturedCard from "@/components/FeaturedCard";
import HorizotalLine from "@/components/HorizontalLine";
import TrendingPropertyCard from "@/components/TrendingPropertyCard";
import {
  FEATUREDPROPERTIES,
  PROPERTYDETAILS,
} from "@/constants/Constants.utils";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const Main = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.mainText}>DISCOVER</Text>
          <HorizotalLine />
        </View>
        <ScrollView
          contentContainerStyle={{ flexDirection: "column" }}
          style={{ gap: 2 }}
        >
          <View style={styles.trendingWrapper}>
            <Text
              style={{
                fontWeight: "500",
                color: "#121212",
                fontSize: 24,
                letterSpacing: -1,
              }}
            >
              Trending Properties
            </Text>
            <Text
              style={{ color: "#12121266", fontSize: 12, marginBottom: 12 }}
            >
              Check out prime real estate shares that are being noticed
            </Text>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ flexDirection: "row" }}
              style={{ gap: 2 }}
            >
              {PROPERTYDETAILS.map((property: any) => {
                return (
                  <View>
                    <TrendingPropertyCard data={property} />
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.trendingWrapper}>
            <Text style={{ fontWeight: "600", fontSize: 20 }}>
              Featured Properties
            </Text>
            <FeaturedTab />
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  mainText: {
    textDecorationStyle: "solid",
    fontSize: 28,
    fontWeight: "300",
    fontStyle: "italic",
    paddingHorizontal: 18,
    paddingVertical: 12,
    letterSpacing: -2,
  },
  trendingWrapper: {
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    paddingTop: 20,
  },
});

export default Main;
