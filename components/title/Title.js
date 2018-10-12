import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';

export default class Title extends React.Component {
  render() {
    const { children, fontSize = 20 } = this.props;
    return (
      <Text style={{
          ...styles.title,
          fontSize,
        }}>{children}</Text>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'montserrat-black',
  }
});
