import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../assets/Theme';
import { HEIGHT } from '../Helpers/Dimensions';
const { height, width } = Dimensions.get('window');

const PasswordInputfield = (props: any) => {
  const { LabelStyle, ContainerStyle } = styles;

  return (
    <View style={[ContainerStyle, props.ContainerStyle]}>
      <View
        style={
          props.Replace
            ? styles.Replace
            : props.SearchField
              ? styles.SearchField
              : [
                styles.ViewStyle,
                props.InputFieldStyle,
                {
                  backgroundColor: props.backgroundColor
                    ? props.backgroundColor
                    : null,
                },
              ]
        }>

        {props.MessageIcon && (
          <TouchableOpacity>
            <Feather name={'search'} color={COLORS.RED} size={25} />
          </TouchableOpacity>
        )}

        {props.MessageIcon1 && (
          <TouchableOpacity>
            <Feather name={'search'} color={COLORS.RED} size={25} />
          </TouchableOpacity>
        )}
        {props.Line && (
          <View style={styles.line2}></View>
        )}

        <TextInput
          multiline={props.Multilineprops}
          editable={props.edit}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}

          autoCapitalize="none"
          style={[
            styles.PlaceholderStyle,
            styles.InputFieldStyle,
            {
              height: 45,
              paddingHorizontal: 0,
              width: props.MessageIcon || props?.MessageIcon1 ? '77%' : '90%',
              backgroundColor: props.backgroundColor,
              color: COLORS.BLACK,
              alignItems: 'center',

            },
            props.TextInputStyle,
          ]}
          {...props}
          //   selectionColor={COLORS.INPUTLABELDARKGRAY}
          secureTextEntry={props.ShowPassword ? true : false}
          maxLength={props?.MaxLength}
          onBlur={props.onBlurprops}
          onFocus={() => {
            props.onFocusprops;
          }}
        />
        {props.SearchField && (
          <TouchableOpacity>
            <Feather name={'search'} color={COLORS.RED} size={25} />
          </TouchableOpacity>
        )}
        {props.CorrectEmailTrue && (
          <View style={[props.passwordIconStyle]}>
            <Entypo name="check" color={'rgba(45, 201, 78, 1)'} size={20} />
          </View>
        )}
        {props.PasswordField ? (
          <TouchableOpacity
            style={[props.passwordIconStyle]}
            onPress={props.PasswordPress}>
            <Ionicons
              name={props.ShowPassword ? 'eye-off-outline' : 'eye'}
              color={'rgba(86, 86, 86, 1)'}
              size={24}
            />
          </TouchableOpacity>
        ) : props.cross ? (
          <TouchableOpacity
            style={[props.passwordIconStyle]}
            onPress={props.PasswordPress}>
            <Entypo
              name={'cross'}
              //  color={COLORS.GRAYCOLORMEDIUM}
              size={20}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {props.Error && props.ShowError && (
        <Text style={[styles.Errorstyle, props.Errorstyle]}>{props.Error}</Text>
      )}
    </View>
  );
};

export default PasswordInputfield;

const styles = StyleSheet.create({
  SearchField: {
    backgroundColor: 'rgba(101, 101, 101, 0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,

    paddingHorizontal: '4%',
    justifyContent: 'space-between',
  },
  ContainerStyle: {
    alignSelf: 'center',
    width: width * 0.90,

    marginVertical: '2%',
  },
  LabelStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    // color: COLORS.INPUTLABELDARKGRAY,
    fontWeight: '400',
  },
  PlaceholderStyle: {
    color: '#FFFFFF',
    fontSize: 15,
    paddingHorizontal: 0,
    paddingVertical: Platform.OS == 'ios' ? 12 : 5,
    width: '90%',
    // marginLeft:props.Searchfield? 10: 0,
    fontFamily: 'Poppins-Regular',
  },
  InputFieldStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',


    borderRadius: 8,
    paddingHorizontal: 8,
  },
  ViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: 'rgba(101, 101, 101, 0.4)',
    borderRadius: 8,
    paddingHorizontal: 8,
    borderColor: 'rgba(101, 101, 101, 0.4)',
    borderWidth: 1,
  },
  Errorstyle: {
    color: '#F14336',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    marginTop: Platform.OS === 'ios' ? 4 : 2,
    fontWeight: '400',
    paddingLeft: 7,
  },
  Replacemovember: {
    backgroundColor: 'rgba(101, 101, 101, 0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    marginVertical: '-3%',
  },
  Replace: {},
  line2: {
    width: 0.7,
    backgroundColor: COLORS.BLACK,
    height: HEIGHT * 0.03,
    alignSelf: "center",
    marginHorizontal: '4%'

  },
});
