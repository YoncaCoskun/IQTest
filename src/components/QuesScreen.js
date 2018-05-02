import React, { Component } from "react";
import { Animated, Dimensions} from "react-native";
import QuestionDetail from './QuestionDetail';

const xOffset = new Animated.Value(0);
const SCREEN_WIDTH = Dimensions.get("window").width;
class QuesScreen extends Component{
  state = { questions: [
      {
        QCount:"Question 1/10",
        Ques: "Which number should come next in the pattern?",
        aOption: "23",
        bOption: "27",
        cOption: "25",
        dOption: "30",
        eOption: "22",
        image: {
          uri: require('IQTest/src/images/ques.jpg')
        }
      },
      {
        QCount:"Question 2/10",
        Ques: "Which one of the five choices makes the best comparison?",
        aOption: "25641",
        bOption: "26451",
        cOption: "12654",
        dOption: "51462",
        eOption: "15264",
        image: {
          uri: require('IQTest/src/images/ques.jpg')
        }
      },
      {
        QCount:"Question 3/10",
        Ques: "1, 15, 3, 21, 6, 28, ? ",
        aOption: "11",
        bOption: "10",
        cOption: "15",
        dOption: "18",
        eOption: "9",
        image: {
          uri: require('IQTest/src/images/ques.jpg')
        }
      }]

  };
  renderQuestions(){
    return this.state.questions.map(question =>
        <QuestionDetail key={question.Ques} question = {question}/>

    );
  }

  render() {
    return (
        <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: xOffset } } }],
            { useNativeDriver: true }
            )}
            horizontal
            pagingEnabled
            style={styles.scrollView}>
          {this.renderQuestions()}
        </Animated.ScrollView>

    );
  }
}
QuesScreen.navigationOptions = {
  title: ""
};

const styles = {
  scrollView: {
    width: SCREEN_WIDTH,
    padding:5,
    marginRight:5,
    marginBottom:10,
    paddingBottom:10
  }
};
export default  QuesScreen;
