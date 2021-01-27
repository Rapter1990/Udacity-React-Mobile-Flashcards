import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { gray, red, green,  azure ,lightPurp, white  } from '../../utils/colors';
import CustomClickButton from "../component/CustomClickButton"

class QuizResult extends Component {


    state = {
        status: true
    }

    render() {

        const {deck, handleReset, returnBack, percent, correctAnswer , incorrectAnswer, score, quizFinished } = this.props;

        if(quizFinished == true) {
            this.setState({
                status: false
            })
        }

        return (
            <View>
                <Text style={styles.quizFinishedText}>Quiz Finished!</Text>
                <Text style={styles.questionText}>{deck.title}</Text>
                <Text style={styles.questionText}>Review</Text>

                <Text style={styles.questionText}>Score: {score}</Text>
                <Text style={styles.questionText}>Correct Answer: {correctAnswer}</Text>
                <Text style={styles.questionText}>Incorrect Answer: {incorrectAnswer}</Text>
                <Text style={styles.questionText}>Score Percentage: {percent}</Text>

                <CustomClickButton
                        btnStyle={{ backgroundColor: green, borderColor: white }}
                        onPress={() => handleReset()}
                        disabled={this.state.status == true}
                    >
                        Reset Quiz
                </CustomClickButton>

                <CustomClickButton
                        btnStyle={{ backgroundColor: green, borderColor: white }}
                        onPress={() => returnBack()}
                        disabled={this.state.status == true}
                    >
                        Go Back
                </CustomClickButton>
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