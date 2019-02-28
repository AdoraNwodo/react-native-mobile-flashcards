import React from 'react'
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import SingleDeckScreen from '../screens/SingleDeck'

export default createAppContainer(createStackNavigator({
  Main: MainTabNavigator,
  SingleDeck : {
    screen: SingleDeckScreen
  }
}));