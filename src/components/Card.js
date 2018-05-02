import React from 'react';
import {Animated, Dimensions, View} from 'react-native';

const Card = props => {
  return (
      <View style={styles.scrollPage}>
        <Animated.View style={[styles.screen]}>
          {props.children}
        </Animated.View>
      </View>
  );
};
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = {
  scrollPage: {
    width: SCREEN_WIDTH,
    paddingRight:10

  },
  screen: {
    //justifyContent: "center",
    //alignItems: "center",
  },
  text: {
    // fontSize: 45,
    //fontWeight: "bold"
  }
};

export default Card;
