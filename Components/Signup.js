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
const Signup = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState();
  const [cpassword, setcpassword] = useState();
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const navigation = useNavigation();
  const signup = () => {
    try {
      if (password.length < 6) {
        Alert.alert(
          "Password Length",
          "Password should not less than 6 characters"
        );
        return;
      } else if (password !== cpassword) {
        Alert.alert("Password Alert", "Password does not matched");
        return;
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            navigation.navigate("Login");
          })
          .catch((error) => {
            Alert.alert("User Alert", "User Already Exist");
            return;
          });
      }
    } catch (error) {
      Alert.alert("Signup Error", error.toSting());
      console.log(error.toString());
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Trip X</Text>
      </View>
      <View>
        <View style={styles.input}>
          <TextInput
            placeholder={"First Name"}
            onChangeText={(first) => {
              setfn(first);
            }}
          ></TextInput>
        </View>

        <View style={styles.input}>
          <TextInput
            placeholder={"Last Name"}
            onChangeText={(last) => {
              setln(last);
            }}
          ></TextInput>
        </View>

        <View style={styles.input}>
          <TextInput
            placeholder={"Email"}
            onChangeText={(emaill) => {
              setemail(emaill);
            }}
          ></TextInput>
        </View>
        <View></View>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={true}
            placeholder={"Password"}
            onChangeText={(passwordd) => {
              setpassword(passwordd);
            }}
          ></TextInput>
        </View>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={true}
            placeholder={"Confirm Password"}
            onChangeText={(cpasswordd) => {
              setcpassword(cpasswordd);
            }}
          ></TextInput>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          if (fn === "") {
            Alert.alert("Missing", "First Name is Missing");
          } else if (ln === "") {
            Alert.alert("Missing", "Last Name is Missing");
          } else if (email === "") {
            Alert.alert("Missing", "Email is Missing");
          } else {
            signup();
          }
        }}
      >
        <Text style={styles.button}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: "8%",
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
    marginBottom: 20,
  },
  text: {
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
export default Signup;
