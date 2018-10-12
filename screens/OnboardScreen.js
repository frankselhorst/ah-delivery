import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import Colors from '../constants/Colors';

import Onboarding from 'react-native-onboarding-swiper';

export default class OnboardScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <Onboarding
                    transitionAnimationDuration={250}
                    onDone={() => {
                        this.props.navigation.navigate('LoginOrRegister')
                    }}
                    showSkip={false}
                    pages={[
                        {
                            backgroundColor: Colors.tintColor,
                            image: <Image source={require('../assets/images/placeholder.png')} />,
                            title: <Text style={styles.pageTitle}>Make money fast</Text>,
                            subtitle: <Text style={styles.pageSubTitle}>in 3 stappen een baan</Text>,
                        },
                        {
                            backgroundColor: Colors.tintColor,
                            image: <Image source={require('../assets/images/placeholder.png')} />,
                            title: <Text style={styles.pageTitle}>Dan ga ik wel komen</Text>,
                            subtitle: <Text style={styles.pageSubTitle}>want ik ben flexibel</Text>,
                        },
                        {
                            backgroundColor: Colors.tintColor,
                            image: <Image source={require('../assets/images/placeholder.png')} />,
                            title: <Text style={styles.pageTitle}>In ieder stadje</Text>,
                            subtitle: <Text style={styles.pageSubTitle}>een ander ritje</Text>,
                        }
                    ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    pageTitle: {
        fontFamily: 'montserrat-bold', fontSize: 25, color: "#fff"
    },
    pageSubTitle: {
        fontFamily: 'montserrat-regular', fontSize: 18, marginTop: 8, color: "#fff"
    }
});
