import { AsyncStorage } from 'react-native'

const DECK_DB_KEY = 'AdoraNwodo:MobileFlashcards_Deck'

const getDecks = async() => {
    const decks = await AsyncStorage.getItem(DECK_DB_KEY)
    return JSON.parse(decks)
}

const getDeck = async(key) => {
    const decks = await AsyncStorage.getItem(DECK_DB_KEY)
    const json = JSON.parse(decks)
    return json[key]
}

const removeDeck = async(key) => {
    const decks = AsyncStorage.getItem(DECK_DB_KEY)
    let data = JSON.parse(decks)
    data[key] = undefined
    delete data[key]
    return AsyncStorage.setItem(DECK_DB_KEY, JSON.stringify(data))
}

const clearAll = async(key) => {
    await AsyncStorage.clear()
}

const saveDeckTitle = async (title) => {

    const deckProperties = {
        [title]: {
            title: title,
            questions: []
        }
    }

    await AsyncStorage.mergeItem(DECK_DB_KEY, JSON.stringify(deckProperties))
    return await getDecks()
}

const addCardToDeck = async (title, card) => {
    const deck = await AsyncStorage.getItem(DECK_DB_KEY)
    let data = JSON.parse(deck)
    data[title].questions.push(card);
    await AsyncStorage.setItem(DECK_DB_KEY, JSON.stringify(data))
    
    return await getDecks()
}

module.exports = {
    getDecks,
    getDeck,
    removeDeck,
    clearAll,
    saveDeckTitle,
    addCardToDeck
}