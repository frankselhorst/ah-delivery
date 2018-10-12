import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles/styles';

import Onboarding from 'react-native-onboarding-swiper';

export default class SlotSelectedScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Onboarding
          bottomBarHeight={0}
          transitionAnimationDuration={0}
          onDone={() => {
            this.props.navigation.push('SelectSlot');
          }}
          showSkip={false}
          pages={[
            {
              backgroundColor: '#ffd700',
              image: <Image source={require('../assets/images/done.gif')} />,
              title: (
                <Text style={[globalStyles.header1, styles.pageTitle]}>
                  thnx!
                </Text>
              ),
              subtitle: (
                <Text style={[globalStyles.headerSemi2, styles.pageSubTitle]}>
                  we zien je morgen
                </Text>
              )
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
    backgroundColor: '#fff'
  },
  pageTitle: {
    color: '#fff',
    fontSize: 26
  },
  pageSubTitle: {
    marginTop: 8,
    color: '#fff'
  }
});
