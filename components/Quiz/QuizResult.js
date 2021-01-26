import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { red,lightPurp  } from '../../utils/colors';

class QuizResult extends Component {


    render() {

        const {deck, navigation,percent, correctAnswer , incorrectAnswer, score } = this.props;

        return (
            <View>
                <Text style={styles.quizFinishedText}>Quiz Finished!</Text>
                <Text style={styles.questionText}>{deck.title}</Text>
                <Text style={styles.questionText}>Review</Text>

                <Text style={styles.questionText}>Score: {score}</Text>
                <Text style={styles.questionText}>Correct Answer: {correctAnswer}</Text>
                <Text style={styles.questionText}>Incorrect Answer: {incorrectAnswer}</Text>
                <Text style={styles.questionText}>Score Percentage: {percent}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    quizFinishedText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: red,
        paddingTop: 30,
        paddingBottom: 20,
      },
    questionText: {
        fontSize: 20,
        fontWeight: 'normal',
        color: lightPurp,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
    }
});

export default QuizResult;