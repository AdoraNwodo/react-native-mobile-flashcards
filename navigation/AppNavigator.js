import React from 'react'
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import AllDecksScreen from '../screens/AllDecks'
import NewDeckScreen from '../screens/NewDeck'
import SingleDeckScreen from '../screens/SingleDeck'

export default createAppContainer(createStackNavigator({
  // Main: MainTabNavigator,
  AllDecks:{
    screen: AllDecksScreen
  },
  NewDeck: {
    screen: NewDeckScreen
  },
  SingleDeck : {
    screen: SingleDeckScreen
  }
}));