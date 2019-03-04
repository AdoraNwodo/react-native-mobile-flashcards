import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { white, tealblue, black } from '../utils/colors'
import { connect } from 'react-redux'
import { setLocalNotification, clearLocalNotification } from '../utils/notifications'

class Quiz extends React.Component {
  static navigationOptions = {
    title: 'Quiz',
  }

  state = {
    counter: 0,
    showQuestion: true,
    correct: 0,
    completed: false
  }

  toggle(){
    this.setState({
      showQuestion: ! this.state.showQuestion,
    })
  }

  restart(){
    this.setState({
      counter: 0,
      visible: 'question',
      correct: 0,
      completed: false
    })
  }

  back(){
    this.props.navigation.pop()
  }

  answer(option){
    if(option === 'correct'){
      this.setState({ correct: this.state.correct + 1})
    }

    if(this.state.counter === this.props.deck.questions.length - 1) {
      this.setState({ completed: true })
    } else {
      this.setState({ counter: this.state.counter + 1})
    }
  }

  componentDidMount(){
    // if this screen is open, then a quiz has been taken ...
    clearLocalNotification()
      .then(setLocalNotification)
  }

  render() {
    const { counter, completed, correct, showQuestion } = this.state
    const { deck } = this.props

    if(completed){
      return(
        <View style={[styles.container , {alignItems: 'center', justifyContent: 'center'}]}>
            <Text style={styles.heading}>Results</Text>
            <Text style={styles.question}>{correct} questions answered correctly.</Text>
            <View style={styles.row}>
              <TouchableOpacity onPress={()=> this.restart()} style={styles.routeBtn}>
                <Text style={{color: white}}>Restart Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.back()} style={styles.routeBtn}>
                <Text style={{color: white}}>Back to Deck</Text>
              </TouchableOpacity>
            </View>
        </View>
      )
    }
    
    if(deck === undefined || deck === null ){
      return(
        <View style={[styles.quiz, {padding: 50}]}>
          <Text style={styles.question}>Could not load the questions in this deck</Text>
        </View>
      )
    }else{
      return (
        <View style={styles.container}>
          <Text style={styles.counter}>Card {counter + 1} of { deck.questions.length }</Text>
          <View style={styles.quiz}>
            { showQuestion ?
              <View>
                <Text style={styles.question}>{deck.questions[counter].question}</Text>
                <Text style={styles.flipCard} onPress={()=> this.toggle()}>Show Answer</Text>
              </View> :
              <View>
                <Text style={styles.question}>{deck.questions[counter].answer}</Text>
                <Text style={styles.flipCard} onPress={()=> this.toggle()}>Show Question</Text>
              </View> 
            }

            <TouchableOpacity style={styles.option}>
              <Text style={[styles.center, {color: white}]} onPress={() => this.answer('correct')}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={[styles.center, {color: white}]} onPress={() => this.answer('incorrect')}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

function mapStateToProps (decks, props) {
  const deckId = props.navigation.state.params.deck.title
  return { 
    deck: decks
      ? decks[deckId]
      : null
  }
}

export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: white,
  },
  quiz:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counter: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 30
  },
  option: {
    backgroundColor: black,
    borderRadius: 50,
    width: 100,
    padding: 15,
    marginBottom: 15
  },
  routeBtn: {
    backgroundColor: black,
    borderRadius: 50,
    width: 120,
    padding: 15,
    margin: 10
  },
  center: {
    textAlign: 'center'
  },
  question: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40
  },
  heading:{
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 40,
    color: tealblue
  },
  flipCard:{
    textAlign: 'center',
    color: tealblue,
    marginBottom: 40,
    fontSize: 18
  },
  row: {
    flexDirection: 'row'
  }
});
