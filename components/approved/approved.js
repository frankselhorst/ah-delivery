import React from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';
import { Button } from 'native-base';

export const Approved = (props) => (
    <View>
        <Text style={styles.approved}>Approved!</Text>
        <Button onPress={() => { props.navigation.navigate('Home') }} primary block><Text style={styles.buttonText}>Begin met rijden</Text></Button>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    approved: {
        fontSize: 30,
        fontFamily: 'montserrat-black',
        textAlign: 'center',
        margin: 20
    },
    buttonText: {
        color: "#fff"
    }
});
