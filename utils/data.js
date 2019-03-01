import { AsyncStorage } from 'react-native'

export default saveDeckTitle = async (title) => {
    const deckProperties = {
        title,
        questions: []
    }

    try {
        await AsyncStorage.setItem(title, deckProperties)
        console.log("Deck saved! ")
    } catch (error) {
        console.log("Error saving deck title")
        console.log(error)
    }
}

export default addCardToDeck = async (title, card) => {

}