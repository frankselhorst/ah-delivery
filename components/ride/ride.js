import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, CardItem, Body } from 'native-base';

export default class Ride extends React.Component {
  render() {
    const { from, till, id } = this.props.ride;
    const { place } = this.props;
    return (
      <Card>
        <CardItem header>
          <Text>
            {from} - {till}
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{place}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  group: {
    marginBottom: 30
  }
});
