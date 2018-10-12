import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

import MapView, { Polygon, Circle, Marker } from 'react-native-maps';
import { Text } from 'native-base';

export default class MapComponent extends React.Component {
    state = {
        regions: [
            {
                name: "Amsterdam",
                lat: 52.3680,
                long: 4.9036,
                fillColor: "rgba(226, 74, 29, .4)"
            }, {
                name: "Rotterdam",
                lat: 51.9244,
                long: 4.4777,
                fillColor: "rgba(74, 144, 226, .4)"
            }, {
                name: "Eindhoven",
                lat: 51.4416,
                long: 5.4697,
                fillColor: "rgba(87,226,29,.4)"
            }
        ]
    };
    animateToClick = (v) => {
        this.animateToCoordinate(v.coordinate)
    }
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
