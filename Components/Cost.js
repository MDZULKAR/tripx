import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from "react-native";
import Colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
const Cost = (props) => {
  const [amount, setamount] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Total Cost</Text>
      </View>
      <View>
        <TextInput
          placeholder={"Input the Amount"}
          style={styles.input}
          keyboardType={"numeric"}
          onChangeText={(text) => {
            setamount(text);
          }}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://www.skyscanner.com.au/");
          navigation.navigate("Cost");
        }}
      >
        <Text style={styles.button}>Add More</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Plan", { value: amount });
        }}
      >
        <Text style={styles.button}>Choose A Plan</Text>
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
    margin: 10,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: Colors.buttoncolor,
    color: "black",
    fontSize: 17,
  },
  input: {
    height: 50,
    width: 300,
    paddingLeft: 20,
    backgroundColor: "white",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginBottom: 15,
  },
});
export default Cost;
