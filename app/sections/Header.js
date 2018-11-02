import styles from './HeaderStyles';
import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, Alert  } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            loggedUser: false
        };
    }

    toggleUser = ()=>{
        if (this.state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                });
                Alert.alert('User logged out');
            })

        }
        else {
            this.props.navigate('LoginRoute')
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if ( result==='none'){
                console.log('NONE');
            }
            else if (result === null){
                AsyncStorage.setItem('userLoggedIn', 'none' , (err, result) => {
                    console.log('Set user to NONE');
                })
            }
            else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                });
            }

        })

    }


    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message ;
        return (
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    // source={ require('../assets/logo.png')}
                />
                <Text
                    style={styles.headText}
                    onPress={this.toggleUser}>{display}
                </Text>
            </View>
        );
    }
}
