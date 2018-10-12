import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button } from 'native-base';
import AppHeader from '../components/app-header/app-header';
import Colors from '../constants/Colors';

export default class LoginOrRegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Text style={styles.pageTitle}>Welkom</Text>
          <Form>
            <Item stackedLabel>
              <Label>Gebruikersnaam</Label>
              <Input keyboardType={'default'} />
            </Item>
            <Item stackedLabel>
              <Label>Wachtwoord</Label>
              <Input secureTextEntry={true} keyboardType={'default'} />
            </Item>
            <Item stackedLabel>
              <Label>Bevestig wachtwoord</Label>
              <Input secureTextEntry={true} keyboardType={'default'} />
            </Item>
            <Item stackedLabel>
              <Label>E-mail</Label>
              <Input keyboardType={'default'} />
            </Item>
            <Button className={styles.button} onPress={() => this.props.navigation.push('WaitingForApproval')} block>
              <Text style={styles.submitButtonText}> Registreren </Text>
            </Button>
          </Form>
          <Text onPress={() => { this.props.navigation.push('Login') }} style={styles.login}>Al een account? Log in</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
