import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'
import { gray, white, black } from '../utils/colors'
import { saveDeckTitle, getDeck } from '../utils/data'
import { handleCreateNewDeck } from '../actions/decks'
import { connect } from 'react-redux'

class NewDeck extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onPress = this.onPress.bind(this)
    this.state = { title: '' }
  }
  
  handleInputChange(value) {
    this.setState({ title: value })
  }
  static navigationOptions = {
    title: 'Add Deck'
  };
  
  onPress(){
    const { title } = this.state
    this.props.dispatch(handleCreateNewDeck(title))
    this.setState({ title: '' })
    
    this.props.navigation.push('SingleDeck', {
      deck: title
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} >What is the title of your new Deck?</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Deck Title' 
          onChangeText={(text) => this.handleInputChange(text) }
          value={this.state.title} />
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

export default connect()(NewDeck)

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
