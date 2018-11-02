import React from 'react';
import { StyleSheet, TouchableOpacity, Alert, Text, View } from 'react-native';

import styles from './MenuStyles';

export class Menu extends React.Component {
    onPress = () => {
      Alert.alert('Button');
    }

    render(){
      return(
        <View style={styles.container}>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => this.props.navigate('LessonRoute')} style={styles.buttonStyles}>
                <Text style={styles.buttonText}>
                  LESSONS
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigate('SignUpRoute')} style={styles.buttonStyles}>
                <Text style={styles.buttonText}>
                  SIGN UP
                </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={this.onPress} style={styles.buttonStyles}>
                <Text style={styles.buttonText}>
                  BLOG
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigate('ContactRoute')} style={styles.buttonStyles}>
                <Text style={styles.buttonText}>
                  CONTACT
                </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={()=>this.props.navigate('QuizRoute')} style={styles.buttonStyles}>
                <Text style={styles.buttonText}>
                  QUIZ
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPress} style={styles.buttonStyles}>
                <Text style={styles.buttonText}>
                  ABOUT
                </Text>
            </TouchableOpacity>
          </View>

        </View>


      )
    }
}
