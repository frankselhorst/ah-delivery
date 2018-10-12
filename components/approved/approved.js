import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button, Container, Content } from 'native-base';
import globalStyles from '../../styles/styles';

export const Approved = props => (
  <Container>
    <Content padder>
      <Text style={globalStyles.header1}>Approved!</Text>
      <Button
        onPress={() => {
          props.navigation.push('SelectSlot');
        }}
        primary
        block
      >
        <Text style={[styles.buttonText, globalStyles.text]}>
          Begin met rijden
        </Text>
      </Button>
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  approved: {
    fontSize: 30,
    fontFamily: 'montserrat-black',
    textAlign: 'center',
    margin: 20
  },
  buttonText: {
    color: '#fff'
  }
});
