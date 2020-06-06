import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {Text, Image, Card, Icon} from "react-native-elements";
import moment from "moment";

export default class TopHeadlineItem extends Component {
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
        if (data == null || data.trim() === "") {
            return require("../assets/images/no-image.png");
        } else {
            return {uri: this.props.news.urlToImage};
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
            <Card containerStyle={{borderRadius: 7, padding: 0}}>
                <Image
                    source={this.getNewsImage(this.props.news.urlToImage)}
                    style={styles.headlinesImageWrapper}
                >
                    {/* Backgroud Overlay */}
                    <View style={styles.bgOverlay}>
                        {/* Content Wrapper */}
                        <View style={styles.headLinesContentWrapper}>
                            <View style={styles.newsCategoryWrapper}>
                                <Text style={{color: "#fff"}}>Sports</Text>
                            </View>
                            <Text
                                h4
                                h4Style={{color: "#F5F5F5", fontWeight: "300", fontSize: 20}}
                            >
                                {this.props.news.title}
                            </Text>

                            {/* Published Date */}
                            <View style={{marginTop: 10}}>
                                <View style={{flexDirection: "row"}}>
                                    <Icon
                                        size={11}
                                        style={{marginRight: 5}}
                                        name="calendar"
                                        type="font-awesome"
                                        color="#E0E0E0"
                                    />
                                    <Text h4 h4Style={styles.newsSource}>
                                        {this.formatDate(this.props.news.publishedAt)}
                                    </Text>
                                </View>
                            </View>
                            {/* News Source */}
                            <View style={{marginTop: 5}}>
                                <View style={{flexDirection: "row"}}>
                                    <Icon
                                        size={11}
                                        style={{marginRight: 5}}
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
                </Image>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    newsCategoryWrapper: {
        alignSelf: "flex-start",
        backgroundColor: "#FFA726",
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 3,
        marginBottom: 8,
    },
    newsSource: {
        fontWeight: "300",
        fontSize: 12,
        color: "#FFF",
    },
    bgOverlay: {
        backgroundColor: "rgba(0,0,0,.6)",
        height: 200,
        width: 300,
        borderRadius: 7,
    },
    headLinesContentWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        paddingTop: 15,
        paddingBottom: 30,
        paddingLeft: 15,
        paddingRight: 15,
    },
    headlinesImageWrapper: {
        height: 200,
        width: 300,
        resizeMode: "cover",
        borderRadius: 7,
    },
});
