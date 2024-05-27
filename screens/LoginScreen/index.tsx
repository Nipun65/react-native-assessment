import ThemeButton from "@/components/ThemedButton";
import { Link } from "@react-navigation/native";
import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";

const LoginScreen = () => {
  const handleLogin = () => {
    router.replace("/(properties)/(main)/home");
  };

  return (
    <View style={style.mainWrapper}>
      <Image
        source={require("@/assets/images/login.png")}
        style={{ marginBottom: 75 }}
      />
      <View style={style.btnWrapper}>
        <ThemeButton
          title='Sign in with Phone Number'
          handleButton={handleLogin}
        />
        <ThemeButton
          title='Sign in with Apple ID'
          handleButton={handleLogin}
          type='secondary'
          children={
            <Image
              source={require("@/assets/images/apple.png")}
              style={{ height: 18, width: 18 }}
            />
          }
        />
        <Text style={{ textAlign: "center" }}>
          <Text> Don't have an account ?</Text>{" "}
          <Link to={"signup"} style={style.link}>
            Sign up
          </Link>
        </Text>
        <Text
          style={{ color: "#121212BF", textAlign: "center", marginTop: 24 }}
        >
          By creating an account, or signing in, you are agreeing to our{" "}
          <Link to={"/termsservice"} style={style.link}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to={"/privacypolicy"} style={style.link}>
            Privacy Policy
          </Link>
          .
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    flexDirection: "column", // Changed to 'row'
    justifyContent: "center",
    alignItems: "center",
    padding: 48,
    backgroundColor: "white",
  },
  btnWrapper: {
    flexDirection: "column",
    gap: 12,
  },
  link: {
    color: "#121212BF",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
