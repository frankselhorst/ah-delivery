import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

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
                        this.props.navigation.navigate('Home')
                    }}
                    showSkip={false}
                    pages={[
                        {
                            backgroundColor: '#FF4E4E',
                            image: <Image source={require('../assets/images/placeholder.png')} />,
                            title: 'Waar',
                            subtitle: 'Kies zelf de locatie',
                        },
                        {
                            backgroundColor: '#4FFF4E',
                            image: <Image source={require('../assets/images/placeholder.png')} />,
                            title: 'Wanneer',
                            subtitle: 'Jij bepaalt wanneer je wel en niet wil werken',
                        },
                        {
                            backgroundColor: '#4A90E2',
                            image: <Image source={require('../assets/images/placeholder.png')} />,
                            title: 'Wanneer',
                            subtitle: 'Jij bepaalt wanneer je wel en niet wil werken',
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
