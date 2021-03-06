import { removeDeck, addCardToDeck, getDecks, saveDeckTitle } from '../utils/data'

export const GET_ALL_DECKS = 'GET_ALL_DECKS'

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

export function handleAddQuestionToDeck (title, card ) {
    return (dispatch) => {
      return addCardToDeck(title, card)
      .then((decks) => {
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

export function handleDeleteDeck (key) {
    return (dispatch) => {
      return removeDeck(key)
      .then((decks) => {
        dispatch(getAllDecks(decks))
      })
    }
}