import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

export default class AllDecks extends React.Component {
  static navigationOptions = {
    title: 'All Decks',
  };

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  decktitle: {

  },
  deckcapacity:{

  }
});
