import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../../utils/notification';

class Quiz extends Component {

    state = {
        title: '',
        currentQuestion: '',
        currentAnswer: '',
        questionNumber: 0,
        numberOfQuestions: this.props.deck.questions.length,
        score: 0,
        quizFinished: false
    }

    resetQuiz = () => {
        this.setState({
          title: this.state.questions[0].title,  
          currentQuestion: this.state.questions[0].question,
          currentAnswer: '',
          questionNumber: 1,
          score: 0,
          quizFinished: false,
        });
    }

    componentDidMount() {
        clearLocalNotification().then(setLocalNotification);
    }

    updateScore = () => {
        const newScore = this.state.score + 1;
        this.setState({
          score: newScore
        })
    }

    backToDeckDetails = () => {
        this.props.navigation.navigate(
          'DeckDetails'
        );
    }

    render() {

        const { navigation } = this.props;
        const title = navigation.getParam('title', 'undefined');

        console.log(title);

        return (
            <View>
                <Text>Quiz</Text>
            </View>
        )
    }
}

const mapStateToProps = (state, { title }) => {
    const deck = state[title];
  
    return {
      deck
    };
};

export default connect(mapStateToProps)(Quiz);