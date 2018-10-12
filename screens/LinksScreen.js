import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, ListItem, Text } from 'native-base';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  navigate = (page) => {
    this.props.navigation.push(page)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <List>
          <ListItem onPress={this.navigate.bind(null, 'Home')}><Text>Home Screen</Text></ListItem>
          <ListItem onPress={this.navigate.bind(null, 'Onboarding')}><Text>Onboarding Screen</Text></ListItem>
          <ListItem onPress={this.navigate.bind(null, 'Register')}><Text>Register Screen</Text></ListItem>
          <ListItem onPress={this.navigate.bind(null, 'Login')}><Text>Login Screen</Text></ListItem>
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
