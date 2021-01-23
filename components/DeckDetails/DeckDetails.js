import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Deck from "./deck";
import { removeDeck } from '../../actions';

class DeckDetails extends Component {

    handleDelete = id => {
        const { removeDeck, navigation } = this.props;
        removeDeck(id);
        navigation.navigate("Decks");
    };

    render() {

        const { deck } = this.props;

        return (
            <View>
                <Text>DeckDetails</Text>
            </View>
        )
    }
}

const mapStateToProps = (state, { navigation }) => {
    const title = navigation.getParam('title', 'undefined');
    const deck = state[title];
  
    return {
      deck
    };
};

const mapDispatchToProps = (dispatch) => (
    {
      removeDeck: (title) => dispatch(removeDeck(title)),
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(DeckDetail);
