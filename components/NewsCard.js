import React, { Component } from "react";
import { Text } from "react-native";
import { Card, Button } from "react-native-elements";

export class NewsCard extends Component {
  render() {
    return (
      <Card title="HELLO WORLD" image={require("../assets/images/test.jpg")}>
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          // icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="READ MORE"
        />
      </Card>
    );
  }
}

export default NewsCard;
