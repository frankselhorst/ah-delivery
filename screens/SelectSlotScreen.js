import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import gql from 'graphql-tag';
import {
  Container,
  Content,
  Text,
  Spinner,
  Card,
  CardItem,
  Body,
  Title,
  Button,
  InputGroup
} from 'native-base';

import { Query } from 'react-apollo';
import AppHeader from '../components/app-header/app-header';
import PlaceFilter from '../components/place-filter/place-filter';
import TimeFilter from '../components/time-filter/time-filter';
import Ride from '../components/ride/ride';

const GET_LOCATIONS = gql`
  {
    locations {
      id
      zone
      place
      rides {
        id
        title
        from
        till
      }
    }
  }
`;

export default class SelectSlotScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    filterPlace: null,
    filterTime: null
  };

  onPlaceFiltered = placeId => {
    this.setState({
      filterPlace: placeId
    });
  };

  onTimeFiltered = time => {
    this.setState({
      filterTime: time
    });
  };

  render() {
    const { filterPlace, filterTime } = this.state;
    return (
      <Container>
        <AppHeader title="Kies je rit" />
        <Content padder>
          <PlaceFilter onPlaceFiltered={this.onPlaceFiltered} />
          <TimeFilter onTimeFiltered={this.onTimeFiltered} />

          <Query query={GET_LOCATIONS}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <Text> Error! ${error.message} </Text>;

              return data.locations
                .filter(({ id }) => filterPlace === null || id === filterPlace)
                .map(({ zone, place, id, rides }) => {
                  return rides
                    .filter(
                      ({ from }) => filterTime === null || from === filterTime
                    )
                    .map(ride => <Ride key={ride.id} place={place} ride={ride} />);
                });
            }}
          </Query>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  group: {
    marginBottom: 30
  }
});
