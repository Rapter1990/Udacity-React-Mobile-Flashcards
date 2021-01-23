import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getAllDecks } from '../../actions';
import { connect } from 'react-redux';
import Deck from '../Deck';
import { gray, lightPurp } from '../../utils/colors';


class Decks extends Component {

    componentDidMount() {
        this.props.getAllDecks();
    }
    
    render() {

        const { decks, navigation} = this.props;

        const deckListing = Object.values(decks).map(deck => {
            return (
                <TouchableOpacity
                    key={deck.title}
                    onPress={() =>
                        navigation.navigate('DeckDetail', { title: deck.title })
                    }
                >
                  <Deck id={deck.title} />
                </TouchableOpacity>
            );
        })

        return (
            <ScrollView style={styles.container}>
              <Text style={styles.title}>Udacity Mobile Flashcards</Text>
              <Text style={styles.subTitle}>Decks</Text>
              {deckListing}
              <View style={{ marginBottom: 30 }} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
      fontSize: 40,
      textAlign: 'center',
      marginBottom: 16,
      color: gray
    },
    subTitle: {
      fontSize: 32,
      textAlign: 'center',
      marginBottom: 16,
      color: gray
    },
    container: {
      flex: 1,
      paddingTop: 16,
      paddingRight: 16,
      backgroundColor: lightPurp,
      paddingLeft: 16,
      paddingBottom: 16,
    },
});

// refer to reducers/index.js
const mapStateToProps = state => ({ decks: state });

// refer to acions/index.js
const mapDispatchToProps = (dispatch) => (
    {
       getAllDecks: () => dispatch(getAllDecks()),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Decks);