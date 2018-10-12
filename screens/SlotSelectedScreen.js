import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapComponent from '../components/map/map';

export default class SlotSelectedScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <MapComponent style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
