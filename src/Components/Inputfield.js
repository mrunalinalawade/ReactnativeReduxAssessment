import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';



import { ANDROID } from './Helpers/Platform';
import { COLORS, VECTOR_ICONS } from '../assets/Theme';
import { HEIGHT, WIDTH } from './Helpers/Dimensions';
import { IMAGEPATH } from '../assets/Images/Images';

const { height, width } = Dimensions.get('window');

const Inputfield = (props) => {
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
                props?.ViewStyle,
                {
                  backgroundColor: props.backgroundColor
                    ? props.backgroundColor
                    : 'rgba(0, 0, 0, 0.05)',
                },
              ]
        }>

        {props.Email && (
          <TouchableOpacity style={styles.iconStyle}>
            <VECTOR_ICONS.Fontisto name={'email'} color={COLORS.PLACEHOLDERCOLOR} size={19} />
          </TouchableOpacity>
        )}

        {props.Password && (
          <TouchableOpacity style={styles.iconStyle}>
            {/* <VECTOR_ICONS.EvilIcons name={'lock'} color={COLORS.PLACEHOLDERCOLOR} size={22}  /> */}
            <Image source={IMAGEPATH.PasswordLock} style={{ width: WIDTH * 0.04, height: HEIGHT * 0.035, resizeMode: 'contain' }} />
          </TouchableOpacity>
        )}

        {props.User && (
          <TouchableOpacity style={styles.iconStyle}>
            <VECTOR_ICONS.Ionicons name={'person-outline'} color={COLORS.PLACEHOLDERCOLOR} size={18} style={{ marginVertical: '3%' }} />
          </TouchableOpacity>
        )}

        {props.Mobile && (
          <TouchableOpacity style={styles.iconStyle}>
            <VECTOR_ICONS.FontAwesome name={'phone'} color={COLORS.PLACEHOLDERCOLOR} size={21} style={{ marginVertical: '3%' }} />
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
          autoComplete='off'
          autoCapitalize="none"
          style={[
            styles.PlaceholderStyle,
            styles.InputFieldStyle,
            {
              height: 45,
              paddingHorizontal: 0,
              width: props.Email || props?.Password ? '94%' : props.User ? '77%' : props.Mobile ? '77%' : props?.PasswordField ? '92%' : '97%',
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
          onBlur={props.onBlur}
          onFocus={() => {
            props.onFocusprops;
          }}
        />
        {props.SearchField && (
          <TouchableOpacity>
            <Feather name={'search'} color={COLORS.RED} size={22} />
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
          <Entypo
            name={props.ShowPassword ? 'eye-with-line' : 'eye'}
            color={'rgba(173, 173, 173, 1)'}
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

export default Inputfield;

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
    backgroundColor: COLORS.INPUTFILEDCOLOR,
    borderRadius: 8,
    paddingHorizontal: 8,
    borderColor: COLORS.BORDERCOLOR,
    borderWidth: 1,
  },
  Errorstyle: {
    color: COLORS.RED,
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    marginTop: Platform.OS === 'ios' ? 4 : undefined,
    fontWeight: '400',
    // paddingLeft: 7,
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: HEIGHT * 0.045,
    alignSelf: "center",
    marginHorizontal: '3%'

  },
  iconStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    // padding: '1.6%',
    borderRadius: 7,
    width: ANDROID ? WIDTH * 0.09 : WIDTH * 0.085,
    alignItems: 'center',
    height: ANDROID ? HEIGHT * 0.043 : HEIGHT * 0.039,
    justifyContent: 'center'
  },
  iconStyle1: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    padding: '1.6%',
    borderRadius: 7,
    // width:WIDTH*0.1,
    alignItems: 'center'
  }
});
