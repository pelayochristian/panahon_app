import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View, Image } from "react-native";
import { Text } from "react-native-elements";
import TopHeadlineItem from "./TopHeadlineItem";

export default class TopHeadlines extends Component {
  render() {
    return (
      <View style={{ height: 250 }}>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Text h4 h4Style={{ fontWeight: "400", fontSize: 20 }}>
            {" "}
            Top Headlines
          </Text>
        </View>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TopHeadlineItem />
            <TopHeadlineItem />
          </ScrollView>
        </View>
      </View>
    );
  }
}
