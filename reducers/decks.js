import { GET_ALL_DECKS, GET_DECK, ADD_CARD_TO_DECK , REMOVE_DECK, ADD_DECK } from '../actions/decks'

export default function decks (state = {}, action){
    switch(action.type){
        case GET_ALL_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case GET_DECK:
            return {
                ...state,
                ...action.deck
            }
        case ADD_CARD_TO_DECK:
            return {
                ...state,
                ...action.deck
            }
        case REMOVE_DECK:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.decks
            }
    }
}