import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import PrivacyPolicy from './PrivacyPolicyScreen';
export default class WelcomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style ={{color:'black',fontSize:30}}>Book Library</Text>
        <Image

          style={{ width: 300, height: 300 }}
          source={require("../assets/adaptive-icon.png")} />


        {/* Text Input For Entering "Email" On The Welcome Screen */}
        <TextInput
          style={styles.loginBox}
          placeholder={"Enter Your Email Or Username"}
          keyboardType="email-address"
          onChangeText={(text) => {

          }}
        />

        {/* Text Input For Entering "Passsword" On The Welcome Screen */}
        <TextInput
          style={styles.loginpasswordBox}
          placeholder={"Enter Your Password"}
          keyboardType="visible-password"
          onChangeText={(text) => {

          }}
        />

        {/*TouchableOpcity For "LogingIn" In The Welcome Screen */}
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={() =>
            Alert.alert("User Signed In")
          }
        >
          <Text style={styles.LoginAndSignUpButtonText}>Login</Text>
        </TouchableOpacity>

        {/*TouchableOpacity For "SigningIn" On The Welcome Screen*/}
        <TouchableOpacity
          style={styles.SignUpButton}
          onPress={() =>
            Alert.alert("User Registered")
          }

        >
          <Text style={styles.LoginAndSignUpButtonText}>Create An Account</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.PrivacyPolicy}
          onPress={() => {
            this.props.navigation.navigate("PrivacyPolicyScreen")
          }}
        >

          <Text style={styles.PrivacyPolicyText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 1000,
    height: 1000
  },

  loginBox: {
    marginTop: 20,
    height: 40,
    width: 250,
    paddingLeft: 10,
    borderWidth: 1.5,
    borderRadius: 8,
    backgroundColor: 'white'

  },
  loginpasswordBox: {
    marginTop: 20,
    height: 40,
    width: 250,
    paddingLeft: 10,
    borderWidth: 1.5,
    borderRadius: 8,
    backgroundColor: 'white'

  },
  LoginButton: {
    marginTop: 20,
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 5,
    backgroundColor:'white'

  },

  LoginAndSignUpButtonText: {
    color: 'black',
    fontWeight: 'bold'
  },

  SignUpButton: {
    marginTop: 20,
    height: 35,
    width: 200,
    borderWidth: 1.5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },

  PrivacyPolicy: {
    marginTop: 10,

  },

  PrivacyPolicyText: {
    color: 'blue',
    fontSize: 10,

  }



});
