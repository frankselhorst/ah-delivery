import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Form, Item, Label, Input, Button, Container, Content } from 'native-base';
import AppHeader from '../components/app-header/app-header';
export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <AppHeader title="Registreren" />
        <Content padder>
          <Text style={styles.formHeading}>Account aanmaken</Text>
          <Form>
            <Item stackedLabel>
              <Label>Gebruikersnaam</Label>
              <Input keyboardType={'default'} autoCapitalize={false} />
            </Item>
            <Item stackedLabel>
              <Label>Wachtwoord</Label>
              <Input secureTextEntry={true} keyboardType={'default'} autoCapitalize={false} />
            </Item>
            <Item stackedLabel>
              <Label>Bevestig wachtwoord</Label>
              <Input secureTextEntry={true} keyboardType={'default'} autoCapitalize={false} />
            </Item>
            <Item stackedLabel>
              <Label>E-mail</Label>
              <Input keyboardType={'default'} autoCapitalize={false} />
            </Item>
            <Button className={styles.button} onPress={() => this.props.navigation.push('WaitingForApproval')} block primary>
              <Text style={styles.submitButtonText}> Volgende </Text>
            </Button>
          </Form>
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
  button: {
    marginTop: 30
  },
  formHeading: {
    fontSize: 22,
    fontFamily: 'montserrat-bold',
    padding: 14
  },
  submitButtonText: {
    color: "#fff",
  }
});
