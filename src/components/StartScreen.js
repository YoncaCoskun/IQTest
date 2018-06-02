import React from "react";
import { Text, Button, View ,Image} from "react-native";
const styles = {
  imgStyle: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 75,
  },
  textStyle:{
    width: 270,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    marginLeft:260,
    marginBottom:30,
    marginTop:40,
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonStyle:{
    backgroundColor:'#47D978',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:280,
    marginRight:280,

  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
};
const StartScreen = props => {

  const { navigate } = props.navigation;
  const { imgStyle} = styles;
  return (
      <View>
        <Image style = { imgStyle } source={require('IQTest/src/images/brain.jpg')} resizeMode="stretch" />
        <Text style={styles.welcome}>
          Learn How Smart You Are !
        </Text>
        <Button
            onPress={() => navigate("QuesScreen")}
            title="START"/>
      </View>
  );
};

export default StartScreen;
