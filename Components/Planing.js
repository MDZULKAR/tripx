import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, CheckBox } from "react-native";
import Colors from "../constants/colors";
import Checklist from "./Checklist";

const Planing = (props) => {
  const { navigation, route } = props;
  useEffect(() => {
    planing(route.params.plan, route.params.value);
    setCounter(1);
    setCounter1(0);
  }, []);
  const [dataa, setdataa] = useState();
  const [num, setnum] = useState();
  const [counter, setCounter] = useState(1);
  const [counter1, setCounter1] = useState(0);
  const [ztype, settype] = useState();
  const [monthly, setmonthly] = useState(false);
  const [visible1, setvisible1] = useState(false);
  const [visible2, setvisible2] = useState(false);
  const [visible3, setvisible3] = useState(false);
  const [visible4, setvisible4] = useState(false);
  const [all, setall] = useState("No");
  const planing = (z, numb) => {
    settype(z);
    if (z === 1) {
      const data = [
        { id: 1, key: "1st Week" },
        { id: 2, key: "2nd Week" },
        { id: 3, key: "3rd week" },
        { id: 4, key: "4th Week" },
      ];
      setnum(Number(numb) / 4);
      setdataa(data);
    } else if (z === 2) {
      const data = [
        { id: 1, key: "1st Fornight" },
        { id: 2, key: "2nd Fornight" },
      ];
      setnum(Number(numb) / 2);

      setdataa(data);
    } else if (z === 3) {
      const data = [{ id: 1, key: "Month" }];
      setdataa(data);
      setnum(Number(numb));
    }
  };
  const handleachieve = () => {
    if (counter >= 4 && ztype === 1) {
      setCounter((state) => {
        if (state === 5) {
          setall("Yes");
        } else {
          setall("No");
        }
        return state;
      });
    } else if (counter >= 2 && ztype === 2) {
      setCounter((state) => {
        if (state === 3) {
          setall("Yes");
        } else {
          setall("No");
        }
        return state;
      });
    } else if (ztype === 3) {
      setmonthly((state) => {
        if (state) {
          setall("Yes");
        }
        return state;
      });
    }
  };

  const handlecounter = () => {
    setCounter(counter + 1);
  };
  const handlecounter1 = () => {
    setCounter1(counter1 + 1);
  };

  const handlemonth = (a) => {
    setmonthly(a);
    setmonthly((state) => {
      console.log(state); // "React is awesome!"

      return state;
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{route.params.name}</Text>
      </View>
      <View style={styles.visit}>
        <Text style={styles.smalltext}>{num}$</Text>
      </View>
      <FlatList
        data={dataa}
        renderItem={({ item }) => (
          <Checklist
            title={item.key}
            id={item.id}
            b={handlecounter}
            c={handlecounter1}
            handler={handleachieve}
            month={handlemonth}
          />
        )}
      />
      <View>
        <Text style={styles.text}>
          Monthly Goal = {Number(route.params.value)}$
        </Text>
        <Text style={styles.text}>Achieved = {all} </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: Colors.primary,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.text,
    fontSize: 30,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  smalltext: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    justifyContent: "center",
  },
  visit: {
    borderRadius: 20,
    margin: 15,
    width: 150,
    height: 45,
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: Colors.buttoncolor,
    color: "black",
  },
  plan: {
    borderRadius: 10,
    marginVertical: 30,
    width: 200,
    height: 45,
    flexDirection: "row",
    backgroundColor: "white",
  },
  checkbox: {
    alignSelf: "center",
  },
});
export default Planing;
