import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome to trip X</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      >
        <Text
          style={{
            color: "black",
            textAlign: "center",
            justifyContent: "center",
            fontSize: 17,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Text style={styles.textor}>Or</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("Signup");
        }}
      >
        <Text
          style={{
            color: "black",
            textAlign: "center",
            justifyContent: "center",
            fontSize: 17,
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.text,
    fontSize: 30,
    marginBottom: 20,
  },
  textor: {
    color: Colors.text,
    fontSize: 15,
  },
  button: {
    borderRadius: 20,
    margin: 15,
    width: 150,
    height: 45,
    padding: 10,
    // textAlign: "center",
    // justifyContent: "center",
    backgroundColor: Colors.buttoncolor,
    color: "black",
    fontSize: 17,
  },
});
export default Home;
