import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as firebase from "firebase";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import Colors from "../constants/colors";

const Login = (props) => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigation = useNavigation();
  const login = () => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          navigation.navigate("Cities");
        })
        .catch((error) => {
          Alert.alert("Invalid data", "Email or password is incorrect");
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.trip}>Trip X</Text>
        <View style={styles.input}>
          <TextInput
            placeholder={"Write your Email"}
            onChangeText={(emaill) => {
              setemail(emaill);
            }}
          ></TextInput>
        </View>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={true}
            placeholder={"Enter your password"}
            onChangeText={(passwordd) => {
              setpassword(passwordd);
            }}
          ></TextInput>
        </View>
      </View>

      <TouchableOpacity onPress={login}>
        <Text style={styles.button}>Login</Text>
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
  trip: {
    textAlign: "center",
    justifyContent: "center",
    color: Colors.text,
    fontSize: 30,
    marginBottom: 50,
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
export default Login;
