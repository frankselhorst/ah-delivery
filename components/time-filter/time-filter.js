import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import gql from 'graphql-tag';
import { Text, Title, Button, InputGroup } from 'native-base';
import { Query } from 'react-apollo';

const GET_TIMES = gql`
  {
    rides {
      from
    }
  }
`;

export default class TimeFilter extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    selectedTime: null
  };

  onTimeSelect = from => {
    const { selectedTime } = this.state;
    const newTime = from === selectedTime ? null : from;

    if (this.props.onTimeFiltered) {
      this.props.onTimeFiltered(newTime);
    }

    this.setState({
      selectedTime: newTime
    });
  };

  render() {
    const { selectedTime } = this.state;

    return (
      <Query query={GET_TIMES}>
        {({ loading, error, data }) => {
          if (loading) return null;

          return (
            <React.Fragment>
              <Title>Kies je tijd</Title>
              <ScrollView style={styles.scroll}>
                <InputGroup style={styles.group}>
                  {data.rides
                    .sort((a, b) => parseFloat(a.from) > parseFloat(b.from))
                    .map(({ from }) => {
                      return (
                        <Button
                          onPress={() => this.onTimeSelect(from)}
                          style={styles.button}
                          key={from}
                          rounded
                          light={selectedTime !== from}
                          primary={selectedTime === from}
                        >
                          <Text>{from}</Text>
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
    paddingTop: 16
  },
  button: {
    marginRight: 8
  },
  scroll: {
    marginBottom: 16,
  }
});
