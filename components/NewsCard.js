import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";
import { Card, Icon, Text } from "react-native-elements";
import moment from "moment";
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
    if (data == null || data.trim() == "") {
      return require("../assets/images/no-image.png");
    } else {
      return { uri: this.props.news.urlToImage };
    }
  };

  /**
   * Method to format a date to MMMMM DD, YYYY
   *
   * @since 2020-06-05
   * @memberof NewsCard
   */
  formatDate = (date) => {
    return moment(date).utc().format("MMMM DD, h:mm A");
  };

  render() {
    return (
      <Card containerStyle={styles.newsCard}>
        <View style={styles.container}>
          {/* News Banner Image */}
          <View style={styles.colOne}>
            <Image
              source={this.getNewsImage(this.props.news.urlToImage)}
              style={styles.newsImage}
            />
          </View>

          {/* News Content */}
          <View style={styles.colTwo}>
            <View style={{ marginLeft: 10 }}>
              {/* Date published */}
              <View style={styles.top}>
                <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                  <Icon
                    size={11}
                    style={{ marginRight: 5 }}
                    name="calendar"
                    type="font-awesome"
                    color="#E0E0E0"
                  />
                  <Text h4 h4Style={styles.newsSource}>
                    {this.formatDate(this.props.news.publishedAt)}
                    {/* {this.props.news.publishedAt} */}
                  </Text>
                </View>
              </View>

              {/* News Title */}
              <View style={{ marginTop: 10, marginBottom: 10 }}>
                <Text h4 h4Style={styles.newsTitle}>
                  {this.props.news.title}
                </Text>
              </View>

              {/* News Source */}
              <View style={styles.bottom}>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    size={11}
                    style={{ marginRight: 5 }}
                    name="pencil"
                    type="font-awesome"
                    color="#E0E0E0"
                  />
                  <Text h4 h4Style={styles.newsSource}>
                    {this.props.news.source.name}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Card>
    );
  }
}

export default NewsCard;

const styles = StyleSheet.create({
  newsCard: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 10,
    borderRadius: 7,
  },
  newsImage: {
    width: null,
    height: null,
    resizeMode: "cover",
    flex: 1,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: "300",
  },
  newsSource: {
    fontWeight: "100",
    fontSize: 11,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  colOne: {
    width: "35%",
  },
  colTwo: {
    width: "65%",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  top: {
    marginTop: 10,
    flex: 1,
    justifyContent: "flex-start",
  },
});
