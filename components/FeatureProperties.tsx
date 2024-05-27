import * as React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import FeaturedCard from "./FeaturedCard";
import { FEATUREDPROPERTIES, KEYMAPPING } from "@/constants/Constants.utils";

const FeatureProperties = ({ tabName }: any) => {
  return (
    <View>
      {FEATUREDPROPERTIES[KEYMAPPING[tabName]].map((property: any) => {
        return (
          <View>
            <FeaturedCard property={property} tabName={tabName} />
          </View>
        );
      })}
    </View>
  );
};

const renderScene = SceneMap({
  first: () => <FeatureProperties tabName='ongoing bids' />,
  second: () => <FeatureProperties tabName='coming soon' />,
  third: () => <FeatureProperties tabName='closed' />,
});

const renderTabBar = (props: any) => {
  return (
    <TabBar
      {...props}
      indicatorStyle={{ color: "#D6D2C0" }}
      style={{
        backgroundColor: "white",
        elevation: 0,
        shadowOpacity: 0,
      }}
      labelStyle={{ color: "#121212BF", fontSize: 10 }}
    />
  );
};

export const FeaturedTab = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "ON-GOING BIDS" },
    { key: "second", title: "COMING SOON" },
    { key: "third", title: "CLOSED" },
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

const styles = StyleSheet.create({
  trendingWrapper: {
    paddingTop: 32,
    paddingHorizontal: 20,
  },
});
export default FeatureProperties;
