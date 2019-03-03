import React from 'react'
import { 
  Platform, 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableHighlight, 
  TouchableOpacity,
  NavigationActions
} from 'react-native'
import { gray, lightgray, white, black } from '../utils/colors'
import Icon from 'react-native-vector-icons/Ionicons'
import { getDecks, clearAll } from '../utils/data'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/decks'

class AllDecks extends React.Component {
  static navigationOptions = {
    title: 'All Decks',
  }

  componentDidMount(){
    //clearAll()
    // this.fetchAllDecks()
    this.props.dispatch(handleInitialData())
    console.log("Props - ", this.props.decks)
  }

  fetchAllDecks(){
    getDecks()
      .then((decks) => {
        this.setState({ decks: Object.values(decks) })
      })
  }

  state = {
    decks: null,
  }

  toSingleDeck(deck) {

    this.props.navigation.push('SingleDeck', {
      deck: deck
    })
  }

  toNewDeckScreen() {
    this.props.navigation.push('NewDeck')
  }

  render() {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        {decks !== null && <FlatList 
          data={Object.values(decks)}  
          renderItem={({item}) =>
          <TouchableHighlight key={item.title} style={styles.deck} onPress={ () => this.toSingleDeck(item.title)} underlayColor={lightgray}>
            <View>
                <Text style={styles.decktitle}>{item.title}</Text>
                <Text style={styles.deckcapacity}>{item.questions.length} cards</Text>          
            </View>
            </TouchableHighlight>
          }
          keyExtractor={(item, index) => index.toString()}
        /> }
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
function mapStateToProps (decks) {
  return { 
    decks: decks
      ? decks
      : null
  }
}
export default connect(mapStateToProps)(AllDecks)

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
