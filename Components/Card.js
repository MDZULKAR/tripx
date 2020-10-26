import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const Card = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={props.imagePath} />
      <Text style={styles.text}>{props.detail}</Text>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://www.skyscanner.com.au/");
        }}
      >
        <Text style={styles.button}>{props.button}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    width: 300,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  image: {
    marginTop: -30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: 150,
  },
  button: {
    borderRadius: 20,
    margin: 15,
    width: 150,
    height: 45,
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: Colors.buttoncolor,
    color: "black",
    fontSize: 17,
  },
});
export default Card;
