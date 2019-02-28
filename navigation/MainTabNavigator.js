import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon';
import AllDecksScreen from '../screens/AllDecks';
import NewDeckScreen from '../screens/NewDeck';

export default createBottomTabNavigator({
  AllDecks: {
    screen: AllDecksScreen,
    navigationOptions: {
      tabBarLabel: 'All Decks',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
        />
      ),
    },
  },
  NewDeck: {
    screen: NewDeckScreen,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      title: 'Decks',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
        />
      ),
    }
  }
}, {
  navigationOptions: {
    title: 'Mobile Flashcards'
  }
});

