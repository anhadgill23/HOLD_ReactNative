import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Button } from 'react-native';

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
  },
} );

export default class Login extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { username: 'Username' };
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput
          style={styles.textInput}
          onChangeText={username => this.setState( { username } )}
          placeholder={this.state.username}
        />
        <Button
        //   onPress={onPressLearnMore}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </KeyboardAvoidingView>
    );
  }
}

