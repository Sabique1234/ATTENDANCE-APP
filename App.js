import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './screens/AttendanceScreen';
import SummaryScreen from './screens/ResultScreen';

export default class App extends React.Component {
  render() {
    return(
      <View>
        <AppContainer/>
      </View>
    )    
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
})

const AppContainer = createAppContainer(AppNavigator);