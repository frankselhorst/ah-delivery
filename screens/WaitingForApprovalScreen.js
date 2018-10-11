import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class WaitingForApprovalScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>WaitingForApprovalScreen</Text>
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
