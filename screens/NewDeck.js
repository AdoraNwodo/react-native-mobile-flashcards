import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'
import { gray, white, black } from '../utils/colors'

export default class NewDeck extends React.Component {
  static navigationOptions = {
    title: 'New Deck'
  };

  onPress(){
    console.log("pressed. yay")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} >What is the title of your new Deck?</Text>
        <TextInput style={styles.input} placeholder='Deck Title' />
        <TouchableOpacity 
          onPress={this.onPress}
          style={styles.button}
          >
            <Text style={{color: white, fontWeight: 'bold'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    margin: 30,
    justifyContent: 'center'
  },
  input: {
    borderBottomColor: gray,
    borderBottomWidth: 1,
    fontSize: 20
  },
  text: {
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 40
  },
  button: {
    alignItems: 'center',
    backgroundColor: black,
    color: white,
    padding: 10,
    marginTop: 30,
    borderRadius: 20
  }
});
