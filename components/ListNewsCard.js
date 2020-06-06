import React, {Component} from "react";
import {Text, View, RefreshControl} from "react-native";
import NewsCard from "./NewsCard";
import {ScrollView} from "react-native-gesture-handler";
import TopHeadlines from "./TopHeadlines";
import TabButton from "./TabButton";
import moment from "moment";


/**
 *This is the component for NewsCard
 *
 * @export
 * @class ListNewsCard
 * @extends {Component}
 * @since 2020-06-04
 */
export class ListNewsCard extends Component {
    // BASE_URL = "http://167.99.155.43:8080/news/news-api/";
    BASE_URL = "http://192.168.1.5:8080/news/news-api/";

    constructor(props) {
        super(props);
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
        this.setState({isRefresh: true, loaded: false, error: null});
        let startDate = moment().format('YYYY-MM-DD');
        let endDate = moment().format('YYYY-MM-DD');
        let url = this.BASE_URL + "everything?query=philippines&startDate=" + startDate + "&endDate=" + endDate;

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
                this.setState({isRefresh: false});
            });
    };

    /**
     *Hanlde the exception
     *
     * @memberof ListNewsCard
     */
    catchException = (error) => {
        this.setState({loaded: true, error: error.message});
    };

    /**
     *Handle the data from the API call and display to the DOM
     *
     * @memberof ListNewsCard
     */
    showNews = (data) => {
        this.setState({loaded: true, data});
    };

    componentDidMount() {
        this.loadNewsData();
    }

    render() {
        return (
            <ScrollView
                stickyHeaderIndices={[1]}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefresh}
                        onRefresh={this.loadNewsData}
                    />
                }
            >
                <TopHeadlines/>
                <TabButton/>
                {this.state.error && <Text>{this.state.error}</Text>}
                {this.state.data &&
                this.state.data.NewsAPI.map((news) => <NewsCard news={news}/>)}
            </ScrollView>
        );
    }
}

export default ListNewsCard;
