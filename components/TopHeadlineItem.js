import React, { Component } from "react";
import { View, Image } from "react-native";
import { Text, Card } from "react-native-elements";

export default class TopHeadlineItem extends Component {
  render() {
    return (
      <Card
        containerStyle={{ borderRadius: 7 }}
        imageStyle={{ borderTopRightRadius: 7, borderTopLeftRadius: 7 }}
        image={require("../assets/images/test.jpg")}
      >
        <View style={{ width: 270 }}>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
        </View>
      </Card>
    );
  }
}
