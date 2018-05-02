import React from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';

const Button = ({ onPress ,children}) =>{
return(

    <TouchableOpacity onPress={onPress} style = {styles.buttonStyleActive}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>

);

};
const styles = {
  buttonStyleActive: {
    flex:1,
    alignSelf: 'stretch',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#007aff',
    marginLeft:5,
    marginRight:5

  },
  buttonStyleInactive:{
    flex:1,
    alignSelf: 'stretch',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#ded',
    marginLeft:5,
    marginRight:5
  },
  textStyle:{
    alignSelf:'center',
    color:'#007aff',
    fontSize:16,
    fontWeight:'600',
    paddingBottom:10,
    paddingTop:10
  }
};
export default Button;
