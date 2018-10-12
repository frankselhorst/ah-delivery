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

import { Query } from 'react-apollo';
import AppHeader from '../components/app-header/app-header';

const GET_LOCATIONS = gql`
  {
    locations {
      id
      zone
      place
      rides {
        id
        title
        driver {
          username
        }
      }
    }
  }
`;

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <AppHeader title="Inloggen" />
        <Content padder>
          <Query query={GET_LOCATIONS}>
            {({ loading, error, data }) => {
              if (loading) return <Text> Loading </Text>;
              if (error) return <Text> Error! ${error.message} </Text>;

              return (
                <Form>
                  <Item stackedLabel>
                    <Label>Gebruikersnaam</Label>
                    <Input keyboardType={'default'} autoCapitalize={false} />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Wachtwoord</Label>
                    <Input secureTextEntry={true} keyboardType={'default'} autoCapitalize={false} />
                  </Item>
                  <Button onPress={() => this.props.navigation.navigate('Home')} style={styles.button} block primary>
                    <Text className={styles.submitButton}> Inloggen </Text>
                  </Button>
                </Form>
              );
            }}
          </Query>
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
    color: "#fff",
  }
});
