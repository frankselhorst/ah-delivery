import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import colors from './constants/Colors';

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://beta-labs.ah.nl/alwaysdeliver/graphql/'
  }),
  cache,
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <ApolloProvider client={client}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </ApolloProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/done.gif'),
        require('./assets/images/flex_v2.gif'),
        require('./assets/images/money_v2.gif'),
        require('./assets/images/smart_v2.gif'),
        require('./assets/images/logo-wit.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'montserrat-regular': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
        'montserrat-medium': require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'),
        'montserrat-bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
        'montserrat-semibold': require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
        'montserrat-extrabold': require('./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf'),
        'montserrat-italic': require('./assets/fonts/Montserrat/Montserrat-Italic.ttf'),
        'montserrat-black': require('./assets/fonts/Montserrat/Montserrat-Black.ttf')
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  }
});
