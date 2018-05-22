import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Button } from 'react-native';

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
} );

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text>Hi! {this.props.navigation.getParam( 'username', '' )}</Text>
      </KeyboardAvoidingView>
    );
  }
}

