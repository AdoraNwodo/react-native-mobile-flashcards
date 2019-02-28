import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'

import AllDecksScreen from '../screens/AllDecks'
import NewDeckScreen from '../screens/NewDeck'


// All Decks Navigation
const AllDecksStack = createStackNavigator({
  AllDecks: AllDecksScreen,
})

AllDecksStack.navigationOptions = {
  tabBarLabel: 'All Decks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  ),
}

// New Deck Navigation
const NewDeckStack = createStackNavigator({
  NewDeck: NewDeckScreen
})

NewDeckStack.navigationOptions = {
  tabBarLabel: 'New Deck',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
    />
  ),
}


export default createBottomTabNavigator({
  AllDecksStack,
  NewDeckStack,
});
