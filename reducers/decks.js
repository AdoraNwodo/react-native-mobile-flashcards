import { GET_ALL_DECKS } from '../actions/decks'

export default function decks (state = {}, action){
    switch(action.type){
        case GET_ALL_DECKS:
            return {
                ...action.decks
            }
    }
}