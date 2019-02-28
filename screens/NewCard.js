import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'
import { gray, white, black } from '../utils/colors'

export default class NewCard extends React.Component {
  static navigationOptions = {
    title: 'Add Card'
  };

  onPress(){
    console.log("pressed. yay")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} >Add a card to: hello hows it going</Text>
        <TextInput style={styles.input} placeholder='Question' />
        <TextInput style={styles.input} placeholder='Answer' />
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
    fontSize: 20,
    marginTop: 30
  },
  text: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 30
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
