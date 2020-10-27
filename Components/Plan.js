import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";
const Plan = (props) => {
  const { navigation, route } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}> Choose a Plan</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Planing", {
            value: route.params.value,
            plan: 1,
            name: "Weekly Plan",
          });
        }}
      >
        <Text style={styles.button}>Weekly Savings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Planing", {
            value: route.params.value,
            plan: 2,
            name: "Fortnightly Plan",
          });
        }}
      >
        <Text style={styles.button}>Fortnightly Savings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Planing", {
            value: route.params.value,
            plan: 3,
            name: "Monthly Plan",
          });
        }}
      >
        <Text style={styles.button}>Monthly Savings</Text>
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
    marginBottom: 50,
  },
  button: {
    borderRadius: 20,
    margin: 15,
    width: 200,
    height: 45,
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: Colors.buttoncolor,
    color: "black",
    fontSize: 17,
  },
});
export default Plan;
