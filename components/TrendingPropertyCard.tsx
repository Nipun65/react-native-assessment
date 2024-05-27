import { Image, StyleSheet, Text, View, ViewBase } from "react-native";
// import ThemeButton from "./ThemedButton";

const TrendingPropertyCard = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <Image source={data?.path} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.city}>{data.city}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>{data.sqft} Sqft</Text>
          <Text style={styles.separator}> ▪ </Text>
          <Text style={styles.details}>{data.acre} Acre(s)</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={[styles.fractionInvestment]}>
            {data?.fractionalInvestment ? (
              <Image
                source={require("@/assets/images/check.png")}
                style={styles.crosscheck}
              />
            ) : (
              <Image
                source={require("@/assets/images/cross.png")}
                style={styles.crosscheck}
              />
            )}
            <Text style={styles.separator}> </Text>{" "}
            <Text>Fractional Investment Available</Text>
          </Text>
          <Text style={styles.separator}> </Text>
          <Text style={styles.registered}>
            <Image
              source={require("@/assets/images/register.png")}
              style={styles.crosscheck}
            />
            <Text style={styles.separator}> </Text>
            {data?.registered} people registered
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    // width: 300,
    // height: 200,
    // resizeMode: "contain",
    // flex: 1,
    // aspectRatio: 4 / 2,
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    // backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 5,
  },
  name: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  city: {
    color: "white",
    fontSize: 16,
    fontWeight: "100",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  details: {
    fontSize: 14,
    color: "#FFFFFF99",
  },
  separator: {
    marginHorizontal: 5,
  },
  fractionInvestment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
    flexDirection: "row",
    backgroundColor: "#EBE7D32A",
    color: "#EBE7D3",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 2,
  },
  registered: {
    backgroundColor: "#EBE7D3",
    color: "#121212",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  crosscheck: {
    height: 20,
    width: 20,
  },
});

export default TrendingPropertyCard;
