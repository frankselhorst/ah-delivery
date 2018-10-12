import React from 'react';
import { View, StyleSheet } from 'react-native';
import gql from 'graphql-tag';
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button
} from 'native-base';

import AppHeader from '../components/app-header/app-header';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <AppHeader title="Inloggen" />
        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label>Gebruikersnaam</Label>
              <Input keyboardType={'default'}/>
            </Item>
            <Item stackedLabel last>
              <Label>Wachtwoord</Label>
              <Input
                secureTextEntry={true}
                keyboardType={'default'}
              />
            </Item>
            <Button
              onPress={() => this.props.navigation.navigate('Home')}
              style={styles.button}
              block
              primary
            >
              <Text className={styles.submitButton}> Inloggen </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30
  },
  submitButton: {
    color: '#fff'
  }
});
