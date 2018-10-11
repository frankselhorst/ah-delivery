import React from 'react';
import { View, StyleSheet } from 'react-native';
import gql from 'graphql-tag';
import {
  Container,
  Content,
  Text,
  Spinner,
  Card,
  CardItem,
  Body
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
      }
    }
  }
`;

export default class SelectSlotScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <AppHeader title="Kies je rit" />
        <Content padder>
          <Query query={GET_LOCATIONS}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <Text> Error! ${error.message} </Text>;

              return data.locations.map(({ zone, place, id, rides }) => (
                <Card key={id}>
                  <CardItem header>
                    <Text>{place}</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>{zone}</Text>
                    </Body>
                  </CardItem>
                  <CardItem footer>
                    <Text>Aantal ritten {rides.length}</Text>
                  </CardItem>
                </Card>
              ));
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
  }
});
