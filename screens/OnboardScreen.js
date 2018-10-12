import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const imageStyle = StyleSheet.create({
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
})

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
                        this.props.navigation.navigate('Home')
                    }}
                    showSkip={false}
                    pages={[
                        {
                            backgroundColor: '#fff',
                            image: <Image style={imageStyle} source={require('../assets/images/money-maker.gif')} />,
                            title: 'Make money fast',
                            subtitle: 'In 3 stappen een baan',
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image source={require('../assets/images/placeholder.png')} />,
                            title: 'Dan ga ik wel komen',
                            subtitle: 'want ik ben flexibel',
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image source={require('../assets/images/placeholder.png')} />,
                            title: 'In ieder stadje',
                            subtitle: 'een ander ritje',
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
});
