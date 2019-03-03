import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { white, tealblue, black } from '../utils/colors'

export default class Quiz extends React.Component {
  static navigationOptions = {
    title: 'Quiz',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>Card 1 of 20</Text>
        <View style={styles.quiz}>
          <Text style={styles.question}>Roses are red violets are blue, London is great and Newyork is too!</Text>
          <Text style={styles.flipCard}>Show Answer</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={[styles.center, {color: white}]}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={[styles.center, {color: white}]}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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
  center: {
    textAlign: 'center'
  },
  question: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40
  },
  flipCard:{
    color: tealblue,
    marginBottom: 40,
    fontSize: 18
  }
});
