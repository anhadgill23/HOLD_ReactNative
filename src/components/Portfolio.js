import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import PortfolioIndex from './PortfolioIndex.js';

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
} );

export default class Login extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { userId: this.props.navigation.getParam( 'userId', '' ) };
  }
  render() {
    return (
      <Swiper
        loop={false}
        showsPagination={false}
        index={1}
      >
        <PortfolioIndex userId={this.state.userId} />
        <View style={styles.container}>
          <Text>Hi! {this.props.navigation.getParam( 'username', '' )}</Text>
          <Text> ID: {this.state.userId}</Text>
        </View>
      </Swiper>
    );
  }
}

