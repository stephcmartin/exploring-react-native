import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { Menu } from '../sections/Menu';

import styles from './HomeStyles';

export class Home extends React.Component{
  static navigationOptions = {
    header: null
  };

  render(){
    const { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <Header navigate = {navigate} message='Please Log In' />
        <Hero />
        <Menu navigate={navigate} />
      </View>
    )
  }
}
