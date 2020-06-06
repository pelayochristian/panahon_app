import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Divider, Icon } from "react-native-elements";

export default class Weather extends Component {
  getTemperature() {
    return 20 + "\u00B0";
  }
  render() {
    return (
      <View style={styles.weatherContainer}>
        {/* Column 1 */}
        <View style={{ alignSelf: "flex-start", width: "70%" }}>
          <View style={{ marginLeft: 10 }}>
            <Text h4 h4Style={{ fontWeight: "300", color: "#455A64" }}>
              Morning, Christian
            </Text>
            <Text
              h4
              h4Style={{ fontSize: 18, fontWeight: "300", color: "#455A64" }}
            >
              Here is your news feed
            </Text>
          </View>
        </View>

        {/* Column 2 */}
        <View style={{ marginRight: 5, width: "30%", flexDirection: "row" }}>
          <Icon
            size={30}
            containerStyle={{
              justifyContent: "flex-end",
              marginRight: 5,
              marginBottom: 3,
            }}
            style={{ alignSelf: "flex-start" }}
            name="cloud"
            type="font-awesome"
            color="#FFF"
          />
          <Text
            h4
            h4Style={{
              fontSize: 40,
              fontWeight: "100",
              alignSelf: "flex-end",
              justifyContent: "center",
              color: "455A64",
            }}
          >
            {this.getTemperature()}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weatherContainer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
