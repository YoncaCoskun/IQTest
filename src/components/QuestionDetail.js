import React   from 'react';
import {Text, Alert, Image, View} from 'react-native';
import CardItem from './CardItem';
import RadioForm from 'react-native-radio-form';
import Card from "./Card";
import Button from "./Button";

const QuestionDetail =  ({ question}) => {

  const {aOption, bOption, cOption, dOption, eOption,QCount,Ques,image} = question;
  const imgSource = image.uri;


  const options = [ {label: aOption, value: 0 },
    {label: bOption, value: 1 },
    {label: cOption, value: 2 },
    {label: dOption, value: 3 },
    {label: eOption, value: 4 }];

  _onSelect = ( item) => {
    console.log(question);
    Alert.alert('it works' + item);

  };


  return (
        <Card>

          <CardItem>
            <View style ={styles.imgQuesContainerStyle}>
              <Image source={require('IQTest/src/images/question.png')}/>
            </View>
            <View style={styles.headerContentStyle}>
              <Text style={styles.headerTextStyle}>{QCount}</Text>
              <Text style={styles.textQuesStyle}>{Ques}</Text>
            </View>
          </CardItem>

          <CardItem>
              <Image source={imgSource} style={styles.imgStyle}/>
          </CardItem>


          <CardItem>
            <RadioForm
                style={{ width: 350 - 30 }}
                dataSource={options}
                itemShowKey="label"
                itemRealKey="value"
                circleSize={16}
                initial={1}
                formHorizontal={false}
                labelHorizontal={true}
                onPress={(item) => this._onSelect(item)}
            />
          </CardItem>

          <CardItem>
            <Button onPress={() => Alert.alert("FinishScreen")}>
              Next!!
            </Button>


          </CardItem>

        </Card>



  );

};
const styles = {
  headerContentStyle: {
    flexDirection:'column',
    justifyContent:'flex-start',

  },
  textQuesStyle:{
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  headerTextStyle:{
    fontWeight:'bold',
    fontSize:18

  },
  viewConStyle:{
  },
  imgStyle:{
    height:200,
    flex:1,
    width: null
  },
  imgQuesContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    marginRight:10

  },
}
export default QuestionDetail;
