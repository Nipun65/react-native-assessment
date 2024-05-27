import { StyleSheet, View } from "react-native";

const HorizotalLine = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={style.horizontal} />
    </View>
  );
};
const style = StyleSheet.create({
  horizontal: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
});
export default HorizotalLine;
