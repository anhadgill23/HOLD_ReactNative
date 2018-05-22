import React from 'react';
import { Text, View } from 'react-native';
import PriceChart from './PriceChart';


export default class Login extends React.Component {
  render() {
    return (
      <View>
        <Text>Hi! {this.props.navigation.getParam( 'username', '' )}</Text>
        <PriceChart />
      </View>
    );
  }
}

