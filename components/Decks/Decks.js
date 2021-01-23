import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getAllDecks } from '../../actions';
import { connect } from 'react-redux';
import Deck from '../Deck';


class Decks extends Component {

    componentDidMount() {
        this.props.getAllDecks();
    }
    
    render() {

        const { decks, navigation} = this.props;

        return (
            <View>
                <Text>Decks</Text>
            </View>
        )
    }
}

// refer to reducers/index.js
const mapStateToProps = state => ({ decks: state });

// refer to acions/index.js
const mapDispatchToProps = (dispatch) => (
    {
       getAllDecks: () => dispatch(getAllDecks()),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Decks);