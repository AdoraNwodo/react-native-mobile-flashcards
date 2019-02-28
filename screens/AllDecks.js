import React from 'react'
import { Platform, View, Text, FlatList, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { gray, lightgray, white, black } from '../utils/colors'
import Icon from 'react-native-vector-icons/Ionicons'

export default class AllDecks extends React.Component {
  static navigationOptions = {
    title: 'All Decks',
  };

  state = {
    decks: [
        { title: "Agriculture", capacity: 5 },
        { title: "Lifestyle", capacity: 7 },
        { title: "Music", capacity: 3 },
        { title: "Technology", capacity: 2 },
        { title: "Fashion", capacity: 9 },
        { title: "Art", capacity: 30 },
        { title: "Business", capacity: 15 },
        { title: "Politics", capacity: 12 },
        { title: "Technology", capacity: 2 },
        { title: "Fashion", capacity: 9 },
        { title: "Art", capacity: 30 },
        { title: "Business", capacity: 15 },
        { title: "Politics", capacity: 12 },
        { title: "Technology", capacity: 2 },
        { title: "Fashion", capacity: 9 },
        { title: "Art", capacity: 30 },
        { title: "Business", capacity: 15 },
        { title: "Politics", capacity: 12 },
    ]
  }

  actionOnRow(item) {
    // console.log('Selected Item :',item);
    this.props.navigation.push('SingleDeck')
  }

  toNewDeckScreen() {
    this.props.navigation.push('NewDeck')
    // this.props.navigation.goBack()
  }

  render() {
    const { decks } = this.state
    return (
      <View style={styles.container}>
        <FlatList 
          data={decks}  
          renderItem={({item}) => 
          <TouchableHighlight key={item.title} style={styles.deck} onPress={ () => this.actionOnRow(item)} underlayColor={lightgray}>
            <View>
         
                <Text style={styles.decktitle}>{item.title}</Text>
                <Text style={styles.deckcapacity}>{item.capacity} cards</Text>
              
            </View>
            </TouchableHighlight>
          }
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity
          onPress={ () => this.toNewDeckScreen() }
          style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:70,
            position: 'absolute',                                          
            bottom: 25,                                                    
            right: 15,
            height:70,
            backgroundColor:'#fff',
            borderRadius: 100,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            elevation: 2,
          }}
          >
          <Icon 
            name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} 
            size={50} 
            color={black} />
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
  },
  decktitle: {
    fontSize: 21,
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 7,
    marginTop: 15
  },
  deckcapacity:{
    fontSize: 16,
    color: gray,
    marginLeft: 20,
    marginBottom: 15
  },
  deck: {
      borderWidth: 1,
      borderTopColor: white,
      borderBottomColor: lightgray
  }
});
