import React from 'react';
import gql from 'graphql-tag';
import {
  Header,
  Body,
  Title,
  Left,
  Right
} from 'native-base';
import { Query } from 'react-apollo';

const GET_LOCATIONS = gql`
  {
    locations {
      id
      zone
      place
      rides {
        id
        title
        driver {
          username
        }
      }
    }
  }
`;



export default class AppHeader extends React.Component {
  render() {
    return (
        <Header transparent={true}>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
        </Header>
    );
  }
}
