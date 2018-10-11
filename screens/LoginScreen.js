import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button
} from 'native-base';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header transparent={true}>
          <Body>
            <Title>Inloggen</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label>Gebruikersnaam</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Paswoord</Label>
              <Input />
            </Item>
            <Button style={styles.button} block primary>
              <Text> Inloggen </Text>
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
  }
});
