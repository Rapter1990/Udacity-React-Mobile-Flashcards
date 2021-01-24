import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Deck from "../Deck";
import { removeDeck } from '../../actions';
import { white, purple, gray, lightPurp, red } from '../../utils/colors';
import CustomClickButton from "../component/CustomClickButton";

class DeckDetails extends Component {

    handleDelete = id => {
        const { removeDeck, navigation } = this.props;
        removeDeck(id);
        navigation.navigate("Decks");
    };

    render() {

        const { deck } = this.props;

        return (
            <View style={styles.container}>
              <Deck id={deck.title} />
              <View>
                <CustomClickButton
                  btnStyle={{ backgroundColor: white, borderColor: gray }}
                  txtStyle={{ color: gray }}
                  onPress={() =>
                    this.props.navigation.navigate('NewCard', { title: deck.title })
                  }
                >
                  Add Card
                </CustomClickButton>
                <CustomClickButton
                  btnStyle={{ backgroundColor: lightPurp, borderColor: lightPurp }}
                  txtStyle={{ color: white }}
                  onPress={() =>
                    this.props.navigation.navigate('Quiz', { title: deck.title })
                  }
                >
                  Start Quiz
                </CustomClickButton>
                <CustomClickButton
                  btnStyle={{ backgroundColor: lightPurp, borderColor: lightPurp }}
                  txtStyle={{ color: red }}
                  onPress={() => this.handleDelete(deck.title)}
                >
                  Delete Deck
              </CustomClickButton>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 16,
      paddingRight: 16,
      justifyContent: 'space-around',
      paddingTop: 16,
      paddingBottom: 16,
      backgroundColor: purple
    }
});

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

export default connect(mapStateToProps,mapDispatchToProps)(DeckDetails);
