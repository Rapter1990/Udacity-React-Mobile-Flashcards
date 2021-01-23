import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getAllDecks } from '../../actions';
import { connect } from 'react-redux';


export default class Decks extends Component {

    componentDidMount() {
        this.props.getAllDecks();
      }


    render() {
        return (
            <View>
                <Text>Decks</Text>
            </View>
        )
    }
}
