import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button } from 'native-base';
import Colors from '../constants/Colors';
import globalStyles from '../styles/styles';

export default class LoginOrRegisterScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Content padder>
          <View style={{ alignItems: 'center', marginTop: 75 }}>
            <Image style={{ width: 256, height: 136 }} source={require('../assets/images/logo-wit.png')} />
          </View>
          <View style={{
            marginTop: 200
          }}>
            <Button
              onPress={() => this.props.navigation.push('Login')}
              style={{ marginBottom: 20 }}
              rounded
              large
              block
              light
            >
              <Text style={[globalStyles.headerLight1]}>ik ben al lid</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.push('Register')}
              rounded
              large
              block
              light
            >
              <Text style={[globalStyles.headerLight1]}>doe mij die baan</Text>
            </Button>
          </View>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0084ff',
  },
  pageTitle: {
    fontFamily: 'montserrat-bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 40,
  },
  login: {
    color: Colors.tintColor,
    marginTop: 8
  },
});
