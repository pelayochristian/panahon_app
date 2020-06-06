import React, {Component} from "react";
import {View} from "react-native";

import {ButtonGroup} from "react-native-elements";

export default class TabButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        };
        this.updateIndex = this.updateIndex.bind(this);
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex});
    }

    render() {
        const buttons = ["Today", "Technology", "Sport"];
        const {selectedIndex} = this.state;

        return (
            <View style={{backgroundColor: "#FAFAFA"}}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 30}}
                />
            </View>
        );
    }
}
