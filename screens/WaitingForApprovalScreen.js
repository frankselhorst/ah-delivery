import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import AppHeader from '../components/app-header/app-header';
import { Approved } from '../components/approved/approved';

export default class WaitingForApprovalScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    approved: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        approved: true
      })
    }, 2000)
  }
  render() {
    return (
      <View style={styles.container}>
        <AppHeader title="Ff wachten nog" />
        {this.state.approved && <Approved navigation={this.props.navigation} />}
      </View>
    );
  }
}

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
  }
});
