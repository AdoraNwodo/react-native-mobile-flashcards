import { AsyncStorage } from 'react-native'

export default getDecks = async() => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        const items = await AsyncStorage.multiGet(keys)
        console.log("Deck received! ")
        return items
    } catch (error) {
        console.log(error, "problem")
    }
}

export default getDeck = async(key) => {
    try {
        const item = await AsyncStorage.getItem(key)
        console.log("Deck received! ")
        return item
    } catch (error) {
        console.log(error, "problem getting item")
    }
}

export default removeDeck = async(key) => {
    try {
        const item = await AsyncStorage.removeItem(key)
        console.log("Deck removed! ")
        return item
    } catch (error) {
        console.log(error, "problem removing item")
    }
}

export default clearAll = async(key) => {
    try {
        const item = await AsyncStorage.clear()
        console.log("DB cleared")
    } catch (error) {
        console.log(error, "problem clearing db")
    }
}

export default saveDeckTitle = async (title) => {
    const deckProperties = {
        title,
        questions: []
    }

    try {
        const deck = await AsyncStorage.setItem(title, deckProperties)
        console.log("Deck saved! ")
        return deck
    } catch (error) {
        console.log("Error saving deck title")
        console.log(error)
    }
}

export default addCardToDeck = async (title, card) => {
    // get the current deck properties
    let deckProperties = await AsyncStorage.getItem(title)
    deckProperties.questions.push(card)

    try {
        const deck = await AsyncStorage.mergeItem(title, deckProperties)
        console.log("Deck merged! ")
        return deck
    } catch (error) {
        console.log("Error merging deck title")
        console.log(error)
    }
}