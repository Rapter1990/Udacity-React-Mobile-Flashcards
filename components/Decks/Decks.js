import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getAllDecks } from '../../actions';
import { connect } from 'react-redux';
import Deck from '../Deck';


export default class Decks extends Component {

    componentDidMount() {
        this.props.getAllDecks();
    }
    
    render() {

        const { decks } = this.props;
        console.log(decks);

        return (
            <View>
                <Text>Decks</Text>
            </View>
        )
    }
}
