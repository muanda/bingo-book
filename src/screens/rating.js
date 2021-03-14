import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Card from "../components/card";
import TextInputComponent from "../components/textInput";
const { width, height } = Dimensions.get("window");
const TEXT_INPUT_COLOR = "#e0e0e0";
const TEXT_INPUT_LEFT_PO = 18;
const TEXT_INPUT_TOP_PO = 20;
const TEXT_INPUT_WIDTH = "100%";

const Rating = () => {
  const [characterRatingCheckBox, setcharacterRatingCheckBox] = useState(false);
  const [hideCheckBox, sethideCheckBox] = useState(false);
  const [otherCheckBox, setOther] = useState(false);
  const [opacityValue, setOpacityValue] = useState(0);
  const [cardMarginTop, setCardMarginTop] = useState(-90);
  const [textPlaceHolder, setTextPlaceHolder] = useState("");

  return (
    <SafeAreaView style={styles.androidSafearea}>
      <View style={{ padding: 10 }}>
        <TextInputComponent
          color_={TEXT_INPUT_COLOR}
          left_={TEXT_INPUT_LEFT_PO}
          top_={TEXT_INPUT_TOP_PO}
          width_={TEXT_INPUT_WIDTH}
        />

        <Text
          style={{
            color: "white",
            marginTop: 5,
            fontSize: 15,
            marginBottom: 5,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Create Rating
        </Text>
        <TextInput
          placeholder="Category Title"
          style={styles.textinput}
          underlineColorAndroid="transparent"
        />
        <View style={{ flexDirection: "row" }}>
          <View style={styles.cheboxView}>
            <Text style={styles.text}>Character Rating</Text>
            <CheckBox
              disabled={false}
              value={characterRatingCheckBox}
              onValueChange={(newValue) => {
                setcharacterRatingCheckBox(newValue);
                setOther(false);
                setOpacityValue(1);
                setCardMarginTop(10);
                sethideCheckBox(false);
                setTextPlaceHolder("Enter a character Name");
              }}
            />
          </View>

          <View style={styles.cheboxView}>
            <Text style={styles.text}>Other</Text>
            <CheckBox
              disabled={false}
              value={otherCheckBox}
              onValueChange={(newValue) => {
                setOther(newValue);
                setcharacterRatingCheckBox(false);
                setOpacityValue(1);
                setCardMarginTop(10);
                sethideCheckBox(false);
                setTextPlaceHolder(
                  "Enter jutsu name or other category you want to create"
                );
              }}
            />
          </View>

          <View style={styles.cheboxView}>
            <Text style={styles.text}>Hide</Text>
            <CheckBox
              disabled={false}
              value={hideCheckBox}
              onValueChange={(newValue) => {
                sethideCheckBox(newValue);
                setcharacterRatingCheckBox(false);
                setOther(false);
                setOpacityValue(0);
                setCardMarginTop(-90);
              }}
            />
          </View>
        </View>

        <View style={{ opacity: opacityValue }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput style={styles.textinput} placeholder={textPlaceHolder} />
            {/**   <TouchableOpacity style={styles.btn_add}>
            <Text style={{ color: "white" }}>+</Text>
          </TouchableOpacity> */}
          </View>
          {/** character edit and delete view */}
          <View></View>
          {/** best to worse checkbox */}

          <View style={{ flexDirection: "row" }}>
            <View style={styles.cheboxView}>
              <Text style={styles.text}>Best</Text>
              <CheckBox />
            </View>

            <View style={styles.cheboxView}>
              <Text style={styles.text}>Worse</Text>
              <CheckBox />
            </View>
          </View>
          <TouchableOpacity style={styles.btn_done}>
            <Text style={styles.text}>Done</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 20 }}></View>
        </View>
      </View>
      {/** card*/}
      <ScrollView style={{ marginTop: cardMarginTop }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  titleCategory: {
    margin: 10,
    letterSpacing: 1.2,
    fontWeight: "600",
    fontSize: 18,
  },
  btn_vote: {
    backgroundColor: "#2e7d32",
    width: 60,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#263238",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  text: {
    color: "white",
    letterSpacing:1.2
  },
  btn_done: {
    backgroundColor: "#2e7d32",
    width: 80,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    top: 60,
    marginRight: 20,
    borderRadius:5
  },
  btn_add: {
    backgroundColor: "#2e7d32",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    shadowColor: "#263238",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cheboxView: {
    flexDirection: "row",
    alignItems: "center",
  },
  textinput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
  },
  androidSafearea: {
    flex: 1,
    width: width,
    height: height,
    paddingTop: Platform.OS === "android" ? 58 : null,
    backgroundColor: "#4a148c",
  },
});
export default Rating;
