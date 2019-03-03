import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'
import { gray, white, black } from '../utils/colors'
import { handleAddQuestionToDeck } from '../actions/decks'
import { connect } from 'react-redux'

class NewCard extends React.Component {
  static navigationOptions = {
    title: 'Add Card'
  }

  constructor(props) {
    super(props);
    this.handleQuestionInputChange = this.handleQuestionInputChange.bind(this)
    this.handleAnswerInputChange = this.handleAnswerInputChange.bind(this)
    this.onPress = this.onPress.bind(this)
    this.state = {
      deck: {},
      question: '',
      answer: ''
    }
  }

  handleQuestionInputChange(value) {
    this.setState({ question: value });
  }

  handleAnswerInputChange(value) {
    this.setState({ answer: value });
  }

  onPress(){
    const { question, answer, deck } = this.state
    const card = {
      question: question,
      answer: answer
    }
    console.log("Title is ", deck.title)
    this.props.dispatch(handleAddQuestionToDeck(deck.title, card))
    this.props.navigation.pop()
  }

  componentDidMount(){
    const {deck} = this.props.navigation.state.params
    this.setState({ deck })
  }

  render() {
    const { deck } = this.state 
    return (
      <View style={styles.container}>
        <Text style={styles.text} >Add a card to: {deck.title}</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Question' 
          onChangeText={(text) => this.handleQuestionInputChange(text) }
          value={this.state.title} />
        <TextInput
          style={styles.input}
          placeholder='Answer'
          onChangeText={(text) => this.handleAnswerInputChange(text) }
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
export default connect()(NewCard)

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
