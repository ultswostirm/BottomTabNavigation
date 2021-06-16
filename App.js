import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FBScreen from './screens/fbscreen'
import InstaScreen from './screens/instascreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    );
  }
  
}

const TabNavigator=createBottomTabNavigator({
FACEBOOK:{screen:FBScreen},
INSTAGRAM:{screen:InstaScreen},
})

const AppContainer=createAppContainer(TabNavigator)