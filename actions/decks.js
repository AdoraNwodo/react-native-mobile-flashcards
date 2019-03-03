import { removeDeck, addCardToDeck, getDecks, saveDeckTitle } from '../utils/data'

export const GET_ALL_DECKS = 'GET_ALL_DECKS'
export const GET_DECK = 'GET_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'

export function handleInitialData () {
    return (dispatch) => {
      return getDecks()
        .then((decks) => {
          dispatch(getAllDecks(decks))
        })
    }
}

export function getAllDecks (decks) {
    return {
        type: GET_ALL_DECKS,
        decks
    }
}

export function getDeck (deck) {
    return {
        type: GET_DECK,
        deck
    }
}

function addQuestionToDeck (deck) {
    return {
      type: ADD_CARD_TO_DECK,
      deck
    }
}

export function handleAddQuestionToDeck (title, card ) {
  console.log("Card",card)
  console.log("Title", title)
    return (dispatch) => {
      return addCardToDeck(title, card)
      .then((decks) => {
        console.log("Res, ", decks)
        dispatch(getAllDecks(decks))
      })
    }
}

export function handleCreateNewDeck (title) {
  return (dispatch) => {
    return saveDeckTitle(title)
    .then((decks) => {
      dispatch(getAllDecks(decks))
    })
  }
}

function deleteDeck (decks) {
    return {
      type: ADD_CARD_TO_DECK,
      decks
    }
}

export function handleDeleteDeck (key) {
    return (dispatch) => {
      return removeDeck(key)
      .then((decks) => {
        dispatch(deleteDeck(decks))
      })
    }
}