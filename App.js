//Importing From Dependencies
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator,createAppContainer } from 'react-navigation';
import PrivacyPolicy from './screens/PrivacyPolicyScreen';

//Importing Screens
import WelcomeScreen from './screens/WelcomeScreen';

export default class ClassName extends React.Component {
    
render(){
    return (
        <View style={styles.container}>
        <AppContainer/>
      
        </View>
      );
}
}

const switchNavigator = createSwitchNavigator({
WelcomeScreen:{screen:WelcomeScreen},
PrivacyPolicyScreen:{screen:PrivacyPolicy}
})

const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
