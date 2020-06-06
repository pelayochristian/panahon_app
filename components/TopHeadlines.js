import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View, Image } from "react-native";
import { Text } from "react-native-elements";
import TopHeadlineItem from "./TopHeadlineItem";

export default class TopHeadlines extends Component {
  BASE_URL = "http://167.99.155.43:8080/news/news-api/";

  constructor() {
    super();
    this.state = {
      data: null,
      loaded: false,
      error: null,
      isRefresh: false,
    };
  }

  /**
   *Method to call API for retrieving news data
   *
   * @memberof ListNewsCard
   */
  loadNewsData = (ev) => {
    this.setState({ isRefresh: true, loaded: false, error: null });
    let url = this.BASE_URL + "top-headlines?country=ph";

    // Create a request
    let request = new Request(url, {
      method: "GET",
    });

    // Do the calling of API
    fetch(request)
      .then((response) => response.json())
      .then(this.showNews)
      .catch(this.catchException)
      .finally(() => {
        this.setState({ isRefresh: false });
      });
  };

  /**
   *Hanlde the exception
   *
   * @memberof ListNewsCard
   */
  catchException = (error) => {
    this.setState({ loaded: true, error: error.message });
  };

  /**
   *Handle the data from the API call and display to the DOM
   *
   * @memberof ListNewsCard
   */
  showNews = (data) => {
    this.setState({ loaded: true, data });
  };

  componentDidMount() {
    this.loadNewsData();
  }

  render() {
    return (
      <View style={{ height: 250 }}>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <Text
            h4
            h4Style={{ fontWeight: "400", fontSize: 20, color: "#455A64" }}
          >
            Top Headlines
          </Text>
        </View>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.error && <Text>{this.state.error}</Text>}
            {this.state.data &&
              this.state.data.NewsAPI.map((news) => (
                <TopHeadlineItem news={news} />
              ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
