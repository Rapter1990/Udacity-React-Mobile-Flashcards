import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../../utils/notification';
import QuizError from "./QuizError";
import QuizResult from './QuizResult';

class Quiz extends Component {

    state = {
        title: '',
        currentQuestion: '',
        currentAnswer: '',
        correctAnswer: 0,
        incorrectAnswer: 0,
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
          correctAnswer: 0,
          incorrectAnswer: 0,
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

        const { navigation, questions} = this.props;
        const title = navigation.getParam('title', 'undefined');

        console.log(title);

        if (questions.length === 0) {
            return <QuizError />;
        }

        if (this.state.quizFinished == true) {
            const { correctAnswer, incorrectAnswer , numberOfQuestions } = this.state;
            const scrorePercentValue = ((correctAnswer / numberOfQuestions) * 100).toFixed(0);

            return (
                <QuizResult
                    deck={deck}
                    navigation={this.props.navigation}
                    handleReset={this.resetQuiz}
                    percent={scrorePercentValue}
                    coorectAnswer = {correctAnswer}
                    incorrectAnswer = {incorrectAnswer}
                />
            );
        }

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