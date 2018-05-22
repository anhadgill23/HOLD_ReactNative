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
    this.state = { email: '', password: '' };
    this.onSubmit = this.onSubmit.bind( this );
  }

  onSubmit( e ) {
    console.log( JSON.stringify( this.state ) );
    e.preventDefault();
    fetch( 'https://hold-crypto.herokuapp.com/api/login', {
      method: 'POST',
      body: JSON.stringify( this.state ),
      headers: new Headers( {
        'Content-Type': 'application/json',
      } ),
      credentials: 'same-origin',
    } )
      .then( response => response.json() )
      .then( ( data ) => {
        console.log( data );
        if ( data.err === 'Email or password incorrect' ) {
          this.setState( { error: 'Your email or password is incorrect, please try again.' } );
        } else {
        //   this.setState( { id: data.id } );
        //   this.props.handleAuth( 'true', this.state.id, data.name );
        //   this.props.history.push( `/portfolio/${data.id}` );

        }
      } )
      .catch( ( error ) => {
        console.log( error );
      } );
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text>HOLD{'\n'}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={email => this.setState( { email } )}
          placeholder={this.state.email}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={password => this.setState( { password } )}
          placeholder={this.state.password}
        />
        <Button
          onPress={this.onSubmit}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </KeyboardAvoidingView>
    );
  }
}

