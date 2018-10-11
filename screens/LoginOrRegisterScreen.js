import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class LoginOrRegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>LoginOrRegisterScreen</Text>
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
