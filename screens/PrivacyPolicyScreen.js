import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class PrivacyPolicy extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Content of this app is promoted for
                    fair use only and any misuse(selling or promoting Ads)
                    will lead to a strict action taken by me as the developer. No ads will be promoted on this app
                    as the app had been created just for learning.


                </Text>

                <Text style={styles.whysignintitle}>Why Sign In?</Text>

                <Text style = {styles.whysignintext}>You are requested to Sign In so that I can save your data
                     (such as bookmarks,username) so that you can restart the app from the point you left on any device</Text>

                <TouchableOpacity
                    style={styles.okbutton}
                    onPress={() => {
                        this.props.navigation.navigate("WelcomeScreen")
                    }


                    }
                >
                    <Text style={styles.okbutttontext}>Ok </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 20
    },
    okbutton: {
        width: 70,
        height: 30,
        marginTop: 20,
        borderWidth: 1.5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    okbutttontext: {
        fontWeight: 'bold',
        color: 'blue'
    },
    whysignintitle: {
        width: 200,
        fontSize: 20,
        marginTop: 20,
        marginRight: 155,
        fontWeight: 'bold'
    },
    whysignintext:{
        fontWeight:'bold',
        marginLeft:20,
        marginRight:20,
       
    }
});
