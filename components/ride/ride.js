import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, CardItem, Body, Content } from 'native-base';
import globalStyles from '../../styles/styles';

export default class Ride extends React.Component {
  render() {
    const { from, till, id, duration, fee } = this.props.ride;
    const { place, onPress } = this.props;

    return (
      <Card style={styles.card}>
        <CardItem button onPress={onPress} style={styles.cardItem}>
          <Body>
            <Text style={globalStyles.headerSemi1}>
              {from} - {till}
            </Text>
            <Text style={[globalStyles.text, styles.location]}>{place}</Text>
            <Text style={[globalStyles.text, styles.location, styles.durationAndFee]}>{duration} > &euro; {fee.toFixed(2).replace('.', ',')}</Text>
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
  },
  durationAndFee: {
      color: '#16e4b6',
      fontSize: 18,
      marginTop: 20,
      fontFamily: 'montserrat-bold'
  }
});
