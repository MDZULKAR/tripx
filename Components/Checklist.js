import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/colors";
Icon.loadFont();
const Checklist = (props) => {
  const [isSelected, setSelection] = useState(false);
  const [checkcolor, setcheckcolor] = useState("green");
  const [crosscolor, setcrosscolor] = useState("red");
  const [checkdispaly, setcheckdisplay] = useState("flex");
  const [crossdispaly, setcrossdisplay] = useState("flex");
  const [disable, setdisable] = useState(false);
  const [disable1, setdisable1] = useState(false);
  return (
    <View style={styles.plan}>
      {/* <CheckBox
        value={isSelected}
        onValueChange={() => {
          setSelection(true);
          props.handler();
          props.b();
        }}
        style={styles.checkbox}
      /> */}
      <TouchableOpacity
        disabled={disable}
        onPress={() => {
          setcrossdisplay("none");
          // props.handler(props.id);
          setdisable(true);
          props.month(true);
          props.b();
          props.handler();
        }}
      >
        <View>
          <Icon
            style={[styles.checkbox, { display: checkdispaly }]}
            size={25}
            name="ios-checkmark-circle-outline"
            color={checkcolor}
          ></Icon>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disable1}
        onPress={() => {
          setcheckdisplay("none");
          // props.month(false);
          setdisable1(true);
          props.c();
          props.handler();
        }}
      >
        <Icon
          style={[styles.checkbox, { display: crossdispaly }]}
          size={25}
          color={crosscolor}
          name="ios-close-circle-outline"
        ></Icon>
      </TouchableOpacity>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  plan: {
    borderRadius: 10,
    marginVertical: "12%",
    width: 200,
    height: 45,
    flexDirection: "row",
    backgroundColor: "white",
  },
  text: {
    paddingTop: 10,
    paddingLeft: 30,
  },
  checkbox: {
    paddingTop: 10,
    paddingLeft: 10,
    alignSelf: "center",
  },
});
export default Checklist;
