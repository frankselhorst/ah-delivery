import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import gql from 'graphql-tag';
import { Text, Button, InputGroup, Title } from 'native-base';
import { Query } from 'react-apollo';
import globalStyles from '../../styles/styles';
import AppHeader from '../app-header/app-header';


const GET_LOCATIONS = gql`
  {
    getLocations {
      id
      place
    }
  }
`;

export default class PlaceFilter extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    selectedLocation: null
  };

  onPlaceSelect = id => {
    const { selectedLocation } = this.state;
    const newPlace = id === selectedLocation ? null : id;

    if (this.props.onPlaceFiltered) {
      this.props.onPlaceFiltered(newPlace);
    }
    
    this.setState({
      selectedLocation:  newPlace
    });
  };

  render() {
    const { selectedLocation } = this.state;

    return (
      <Query query={GET_LOCATIONS}>
        {({ loading, error, data }) => {
          if (loading) return null;

          return (
            <React.Fragment>
              <AppHeader />
              <Title style={globalStyles.header1}>ik wil in</Title>
              <ScrollView style={styles.scroll} showsHorizontalScrollIndicator={false}>
                <InputGroup style={styles.group}>
                  {data.getLocations
                  .map(({ place, id }) => {
                    return (
                      <Button
                        onPress={() => this.onPlaceSelect(id)}
                        style={styles.button}
                        key={place}
                        rounded
                        light={selectedLocation !== id}
                        primary={selectedLocation === id}
                      >
                        <Text style={globalStyles.text}>{place}</Text>
                      </Button>
                    );
                  })}
                </InputGroup>
              </ScrollView>
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  group: {
    paddingBottom: 16,
    paddingTop: 16,
    borderWidth: 0,
  },
  button: {
    marginRight: 8
  },
  scroll: {
  }
});
