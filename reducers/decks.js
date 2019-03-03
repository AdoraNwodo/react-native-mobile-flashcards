import { GET_ALL_DECKS, GET_DECK, ADD_CARD_TO_DECK , REMOVE_DECK, ADD_DECK } from '../actions/decks'

export default function decks (state = {}, action){
    switch(action.type){
        case GET_ALL_DECKS:
            return {
                ...action.decks
            }
        case GET_DECK:
            return {
                ...state,
                ...action.deck
            }
    }
}