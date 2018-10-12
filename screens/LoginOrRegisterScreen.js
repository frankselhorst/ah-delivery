import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button } from 'native-base';
import Colors from '../constants/Colors';

export default class LoginOrRegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <View style={{ alignItems: 'center', marginTop: 75 }}>
            <Image style={{ width: 256, height: 136 }} source={require('../assets/images/logo-wit.png')} />
          </View>
          <View style={{
            marginTop: 200
          }}>
            <Button style={{ marginBottom: 20 }} rounded light block>
              <Text style={{ fontSize: 18 }}>ik ben al lid</Text>
            </Button>
            <Button style={{ marginBottom: 20 }} rounded light block>
              <Text style={{ fontSize: 18 }}>doe mij die baan</Text>
            </Button>
          </View>
        </Content>
      </Container>
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
  submitButtonText: {
    color: "#fff"
  },
  button: {
    backgroundColor: Colors.tintColor
  },
  login: {
    color: Colors.tintColor,
    marginTop: 8
  }
});
