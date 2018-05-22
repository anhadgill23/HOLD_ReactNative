import React from 'react';
import { StyleSheet, Text, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './src/components/Login.js';
import Portfolio from './src/components/Portfolio.js';

const RootStack = createStackNavigator( {
  Login: {
    screen: Login,
  },
  Portfolio: {
    screen: Portfolio,
  },
} );

class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

export default App;

