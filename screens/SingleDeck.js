import React from 'react'
import { Platform, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { gray, lightgray, white, black, blue, red } from '../utils/colors'
import Icon from 'react-native-vector-icons/Ionicons'

export default class SingleDeck extends React.Component {
  static navigationOptions = {
    title: 'Single Deck',
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <View style={styles.circle}>
            <Text style={styles.pictureletter}>D</Text>
          </View>
          <Text style={styles.title}>Deck 1</Text>
          <Text style={styles.subtitle}>12 cards</Text>
        </View>
        
        <TouchableOpacity style={styles.button}>
          <View style={styles.row}>
            <Text style={[ styles.action, {color: blue} ]}>Add Card</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.row}>
            <Text style={[ styles.action, {color: blue} ]}>Start Quiz</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.row}>
            <Text style={[ styles.action, {color: red} ]}>Delete Deck</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: lightgray,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  button:{
    backgroundColor: white,
    borderColor: white,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 15,
    marginBottom: 10
  },
  circle: {
    marginTop: 40,
    backgroundColor: gray,
    width: 120,
    height: 120,
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    backgroundColor: white,
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center'
  },
  title: {
    paddingTop: 30,
    paddingBottom: 15,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    paddingBottom: 30,
    textAlign: 'center',
    color: gray,
    fontSize: 20
  },
  action: {
    fontSize: 18
  },
  pictureletter: {
    fontSize: 40,
    color: white,
    fontWeight: 'bold'
  }
});
