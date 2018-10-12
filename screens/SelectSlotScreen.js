import React from 'react';
import { StyleSheet } from 'react-native';
import gql from 'graphql-tag';
import { Container, Content, Text, Spinner } from 'native-base';
import colors from '../constants/Colors';
import { Query } from 'react-apollo';

import PlaceFilter from '../components/place-filter/place-filter';
import TimeFilter from '../components/time-filter/time-filter';
import Ride from '../components/ride/ride';

const GET_LOCATIONS = gql`
  {
    getLocations {
      id
      zone
      place
      rides {
        id
        title
        from
        till
        duration
        fee
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

  onRideSelected = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    const { filterPlace, filterTime } = this.state;
    return (
      <Container style={styles.container}>
        <Content padder style={styles.filters}>
          <PlaceFilter onPlaceFiltered={this.onPlaceFiltered} />
          <TimeFilter
            style={styles.timeFilter}
            location={filterPlace}
            onTimeFiltered={this.onTimeFiltered}
          />
        </Content>
        <Content padder style={styles.slotContainer}>
          <Query query={GET_LOCATIONS}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <Text> Error! ${error.message} </Text>;

              return data.getLocations
                .filter(({ id }) => filterPlace === null || id === filterPlace)
                .map(({ zone, place, id, rides }, index) => {
                  return rides
                    .filter(
                      ({ from }) => filterTime === null || from === filterTime
                    )
                    .map((ride, rideIndex) => (
                      <Ride onPress={this.onRideSelected} key={`${ride.id}-${rideIndex}`} place={place} ride={ride} />
                    ));
                });
            }}
          </Query>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  slotContainer: {
    backgroundColor: colors.appBackground,
  },
  group: {
    marginBottom: 30
  },
  filters: {
    height: 100
  },
  timeFilter: {
    marginTop: 16
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});
