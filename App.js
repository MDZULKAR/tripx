import React from "react";
import * as firebase from "firebase";
import { StyleSheet } from "react-native";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Cities from "./Components/Cities";
import Cost from "./Components/Cost";
import Plan from "./Components/Plan";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Planing from "./Components/Planing";
const firebaseConfig = {
  apiKey: "AIzaSyCpkKt90aSY6BjqzBVa1Qrgcqx6PtVe0Rg",
  authDomain: "tripx-121c0.firebaseapp.com",
  databaseURL: "https://tripx-121c0.firebaseio.com",
  projectId: "tripx-121c0",
  storageBucket: "",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // screenOptions={{
        //   headerShown: false,
        // }}
      >
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Signup} name="Signup" />
        <Stack.Screen component={Cities} name="Cities" />
        <Stack.Screen component={Cost} name="Cost" />
        <Stack.Screen component={Plan} name="Plan" />
        <Stack.Screen component={Planing} name="Planing" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
