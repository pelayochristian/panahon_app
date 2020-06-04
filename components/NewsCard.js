import React, { Component } from "react";
import { Text } from "react-native";
import { Card, Button } from "react-native-elements";

/**
 *This is the component for List of News Cards.
 *
 * @export
 * @class NewsCard
 * @extends {Component}
 * @since 2020-06-04
 */
export class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  /**
   * Method use for returning dom of the card image.
   * @since 2020-06-04
   * @memberof NewsCard
   */
  getNewsImage = (data) => {
    if (data.trim() == "") {
      return require("../assets/images/no-image.png");
    } else {
      return { uri: this.props.news.urlToImage };
    }
  };

  render() {
    return (
      <Card
        title={this.props.news.title}
        image={(this, this.getNewsImage(this.props.news.urlToImage))}
      >
        <Text style={{ marginBottom: 10 }}>{this.props.news.description}</Text>
        <Button
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
