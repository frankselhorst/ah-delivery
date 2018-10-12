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
import globalStyles from '../styles/styles';

import AppHeader from '../components/app-header/app-header';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container style={styles.content}>
        <AppHeader />
        <Content padder>
          <Text
            style={[
              globalStyles.header1,
              globalStyles.colorWhite,
              styles.header
            ]}
          >
            Ik ben
          </Text>
          <Form >
            <Item style={styles.form} floatingLabel>
              <Label style={globalStyles.colorWhite}>email</Label>
              <Input style={globalStyles.colorWhite} keyboardType={'default'} />
            </Item>
            <Item style={styles.form} floatingLabel>
              <Label style={globalStyles.colorWhite}>wachtwoord</Label>
              <Input
                style={globalStyles.colorWhite}
                secureTextEntry={true}
                keyboardType={'default'}
              />
            </Item>
            <Button
              onPress={() => this.props.navigation.push('SelectSlot')}
              style={styles.button}
              rounded
              large
              block
              light
            >
              <Text style={[globalStyles.headerLight1, styles.submitButton]}>ga verder</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#0084ff',
    padding: 20,
  },
  form: {
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  button: {
    marginTop: 60
  },
  header: {
    fontSize: 26,
  }
});
