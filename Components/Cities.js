import React from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import Colors from "../constants/colors";
import Card from "./Card";

const Cities = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Make Your Plan</Text>
      </View>

      <ScrollView>
        <View style={styles.card}>
          <Card
            detail="Make Love in"
            button="Paris"
            imagePath={require("../assets/images/paris.jpg")}
          />
        </View>
        <View style={styles.card}>
          <Card
            detail="Advanced"
            button="Tokyo"
            imagePath={require("../assets/images/tokyo.jpg")}
          />
        </View>
        <View style={styles.card}>
          <Card
            detail="Beautifull City"
            button="Lahore"
            imagePath={require("../assets/images/lahore.jpg")}
          />
        </View>
        <View style={styles.card}>
          <Card
            detail="City of Lights"
            button="New York"
            imagePath={require("../assets/images/newyark.jpg")}
          />
        </View>
        <View style={styles.card}>
          <Card
            detail="City Of Architecture,"
            button="Rome"
            imagePath={require("../assets/images/rome.jpg")}
          />
        </View>
        <View style={styles.card}>
          <Card
            detail="The Home Of England"
            button="London"
            imagePath={require("../assets/images/london.jpg")}
          />
        </View>
        <View style={styles.card}>
          <Card
            detail="The Artificial City"
            button="Dubai"
            imagePath={require("../assets/images/dubai.jpg")}
          />
        </View>
        <View style={styles.card}>
          <Card
            detail="The City of Beach"
            button="Miami"
            imagePath={require("../assets/images/miami.jpg")}
          />
        </View>
        <View style={styles.card}>
          <Card
            detail="The City of People"
            button="Beijing"
            imagePath={require("../assets/images/beijing.jpg")}
          />
        </View>
        <View style={styles.card}>
          <Card
            detail="The City Of Quaid"
            button="Karachi"
            imagePath={require("../assets/images/karachi.jpg")}
          />
        </View>
        <View style={styles.card}>
          <Card
            detail="The White House"
            button="Washington "
            imagePath={require("../assets/images/washington.jpg")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
  header: {
    height: 100,
  },
  text: {
    paddingTop: 20,
    color: Colors.text,
    fontSize: 30,
    marginBottom: 20,
  },
  card: {
    paddingVertical: 20,
  },
});
export default Cities;
