import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { FONT } from '../assets/fonts/Fonts';




const ButtonComponent = (props) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.Action}
      style={[styles.WholeButtonStyle, props.styles]}>
      <Text style={[styles.buttonText, props.Textstyles]}>{props.Label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  linearGradient: {
    // flex: 1,
    paddingVertical: '4.5%',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: FONT.semiBold,
  },
  WholeButtonStyle: {
    // width: '90%',
    alignSelf: 'center',
    paddingVertical: '2%',
    borderRadius: 8,
    backgroundColor: 'green',
  },
});
