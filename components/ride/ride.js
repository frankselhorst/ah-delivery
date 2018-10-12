import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, CardItem, Body } from 'native-base';
import globalStyles from '../../styles/styles';

export default class Ride extends React.Component {
  render() {
    const { from, till, id } = this.props.ride;
    const { place } = this.props;
    const duration = parseFloat(till) - parseFloat(from);
    return (
      <Card style={styles.card}>
        <CardItem style={styles.cardItem}>
          <Body>
            <Text style={globalStyles.headerSemi1}>
              {from} - {till}
            </Text>
            <Text
              style={[globalStyles.text, styles.location]}
            >
              {place}
            </Text>
            <Text
              style={[globalStyles.text, styles.location]}
            >
              {duration}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  group: {
    marginBottom: 30
  },
  card: {
    borderWidth: 0
  },
  cardItem: {
    padding: 22
  },
  location: {
      marginTop: 6
  }
});
