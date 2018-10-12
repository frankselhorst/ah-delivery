import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import gql from 'graphql-tag';
import { Text, Title, Button, InputGroup, Content } from 'native-base';
import { Query } from 'react-apollo';
import uniq from 'uniq';
import globalStyles from '../../styles/styles';

const GET_TIMES = gql`
  {
    getRides {
      from
      locationId
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
    const { location } = this.props;

    return (
      <Query query={GET_TIMES}>
        {({ loading, error, data }) => {
          if (loading) return null;

          const rides = data.getRides
            .filter(item => location === null || location === item.locationId)
            .map(item => item.from)
            .sort((a, b) => parseFloat(a) < parseFloat(b));

          return (
            <Content {...this.props}>
              <Title style={globalStyles.header1}>beginnen om</Title>
              <ScrollView horizontal style={styles.scroll}>
                <InputGroup style={styles.group}>
                  {uniq(rides).map(from => {
                    return (
                      <Button
                        onPress={() => this.onTimeSelect(from)}
                        style={styles.button}
                        key={from}
                        rounded
                        light={selectedTime !== from}
                        primary={selectedTime === from}
                      >
                        <Text style={globalStyles.text}>{from}</Text>
                      </Button>
                    );
                  })}
                </InputGroup>
              </ScrollView>
            </Content>
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
  scroll: {}
});
