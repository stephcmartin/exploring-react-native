import React from 'react';
import { StyleSheet, Image } from 'react-native';
import styles from './HeroStyles';

export class Hero extends React.Component{
  render(){
  return (
      <Image
        style={styles.heroImage}
        source={require('../assets/laptop2.jpg')}
      />
    )
  }
}
