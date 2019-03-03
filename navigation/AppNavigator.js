import { createAppContainer, createStackNavigator } from 'react-navigation'

import AllDecksScreen from '../screens/AllDecks'
import NewDeckScreen from '../screens/NewDeck'
import NewCardScreen from '../screens/NewCard'
import SingleDeckScreen from '../screens/SingleDeck'
import QuizScreen from '../screens/Quiz'

export default createAppContainer(createStackNavigator({
  AllDecks:{
    screen: AllDecksScreen
  },
  NewDeck: {
    screen: NewDeckScreen
  },
  SingleDeck : {
    screen: SingleDeckScreen
  },
  NewCard : {
    screen: NewCardScreen
  },
  Quiz : {
    screen: QuizScreen
  }
}));