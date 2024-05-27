import { PROPERTYDETAILS } from "@/constants/Constants.utils";
import { router, useLocalSearchParams } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Details = () => {
  const { id } = useLocalSearchParams();
  const detail = PROPERTYDETAILS.find((property: any) => property.id == id);

  return (
    <GestureHandlerRootView>
      <View>
        <TouchableOpacity onPress={() => router.back()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text>{id}</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};
export default Details;
