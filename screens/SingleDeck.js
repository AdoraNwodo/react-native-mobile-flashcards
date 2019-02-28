import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';

export default class SingleDeck extends React.Component {
  static navigationOptions = {
    title: 'Single Deck',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
