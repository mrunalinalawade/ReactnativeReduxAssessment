import { StyleSheet, Text, View, SafeAreaView, StatusBar, } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ButtonComponent from '../Components/ButtonCommopent'
import Inputfield from '../Components/Inputfield'
import { ValidateEmail, ValidatePassword, ValidateUserName } from '../Components/ValidationsConfig/Validations'
import { COLORS } from '../assets/Theme'
import { WIDTH } from '../Components/Helpers/Dimensions'
import { ANDROID } from '../Components/Helpers/Platform'
import { FONT } from '../assets/fonts/Fonts'
import { useDispatch } from 'react-redux'


const Login = (props) => {
    const dispatch = useDispatch()
    const [show, setshow] = useState(true);
    const [FullNm, setFullNm] = useState("");
    const [fullNmError, setFullNmError] = useState("");
    const [password, setpassword] = useState('')
    const [PasswordError, setPasswordError] = useState('')
    const [loading, setLoading] = useState(false);
    const [ShowError, setShowError] = useState({
        fullError: false,
        passwordError: false
    });
    const Submit = () => {

        const fullError = ValidateUserName(FullNm)
        const passwordError = ValidatePassword(password)

        if (fullError == '' && passwordError == '') {
            // props.navigation.navigate('')
            LoginAPI()

        } else {
            setFullNmError(fullError)
            setPasswordError(passwordError)
            setShowError({
                fullError: true,
                passwordError: true

            })

        }
    }

    const LoginAPI = async (FullNm, password, checked, setLoader, props) => {
        try {
            setLoader(true);
            const response = await axios.post('https://fakestoreapi.com/auth/login', {
                username: FullNm,
                password: password,
            });

            if (response?.status === 200) {
                const Token = response?.data?.token;
                console.log(Token, 'Token from response');
                dispatch(saveToken (Token));
                props.navigation.navigate('BottomTabbar');
                showMessage({
                    message: "Login successful",
                    type: 'success',
                    icon: 'success',
                    duration: 3000,
                });
            } else {
                setLoader(false);
                showMessage({
                    message: response?.data?.message || 'Login failed',
                    type: 'warning',
                    icon: 'warning',
                    duration: 3000,
                });
            }
        } catch (error) {

            setLoader(false);
            showMessage({
                message: error?.response?.data?.message || 'An error occurred',
                type: 'danger',
                icon: 'danger',
                duration: 3000,
            });
            console.error('Error logging in:', error);
        }
    };

    return (
        <>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
                <View style={{ flex: 1, }}>
                    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} bounces={false} >
                        <View style={styles.mainviewStyle}>

                            <Text style={styles.logintext}>Hello!</Text>
                            <Text style={styles.signStyle}>Sign In to your account</Text>

                            <View style={styles.inputStyle}>
                                {/* <Inputfield
                                    placeholder={'Enter email address'}
                                    Email
                                    Line
                                    placeholderTextColor={COLORS.PLACEHOLDERCOLOR}
                                    TextInputStyle={{ fontSize: 14, fontFamily: FONT.Regular, width: WIDTH * 0.7 }}
                                    InputFieldStyle={{ borderRadius: 5, paddingVertical: '1%', borderColor: COLORS.BORDERCOLOR }}
                                    MaxLength={257}
                                    value={email}
                                    onBlur={() => {
                                        if (email != '' || email != undefined) {
                                            setShowError(prevState => ({
                                                ...prevState,
                                                emailError: true,
                                            }));
                                        }
                                    }}
                                    onChangeText={(text) => {
                                        if (email != '' || email != undefined) {
                                            setemail(text.toLowerCase());
                                            setemailError(ValidateEmail(text));
                                        }
                                    }}
                                    ShowError={ShowError.emailError}
                                    Error={emailError}

                                /> */}
                                <Inputfield
                                    placeholder={"Enter user name"}
                                    User
                                    Line
                                    MaxLength={60}
                                    placeholderTextColor={COLORS.PLACEHOLDERCOLOR}
                                    TextInputStyle={{
                                        fontSize: 14,
                                        fontFamily: FONT.Regular,
                                      
                                        color: COLORS.BLACK,
                                    }}
                                    InputFieldStyle={{
                                        borderRadius: 5,
                                        paddingVertical: "1%",
                                        borderColor: COLORS.BORDERCOLOR,
                                        marginTop: 17
                                    }}
                                    value={FullNm}
                                    onBlur={() => {
                                        if (FullNm != "" || FullNm != undefined) {
                                            setShowError((prevState) => ({
                                                ...prevState,
                                                fullError: true,
                                            }));
                                        }
                                    }}
                                    onChangeText={(text) => {
                                        if (FullNm != "" || FullNm != undefined) {
                                            setFullNm(text);
                                            setFullNmError(ValidateUserName(text));
                                        }
                                    }}
                                    ShowError={ShowError.fullError}
                                    Error={fullNmError}
                                />

                                <Inputfield
                                    Password
                                    Line
                                    PasswordField
                                    passwordIconStyle={{ right: '20%' }}
                                    placeholder={'Enter your password'}
                                    placeholderTextColor={COLORS.PLACEHOLDERCOLOR}
                                    TextInputStyle={{ fontSize: 14, fontFamily: FONT.Regular, }}
                                    InputFieldStyle={{ borderRadius: 5, paddingVertical: '0.8%', borderColor: COLORS.BORDERCOLOR, marginTop: 18, }}
                                    PasswordPress={() => setshow(!show)}
                                    ShowPassword={show}
                                    MaxLength={16}
                                    value={password}
                                    onBlur={() => {
                                        if (password != '' || password != undefined) {
                                            setShowError(prevState => ({
                                                ...prevState,
                                                passwordError: true,
                                            }));
                                        }
                                    }}
                                    onChangeText={(text) => {
                                        if (password != '' || password != undefined) {
                                            setpassword(text);
                                            setPasswordError(ValidatePassword(text));
                                        }
                                    }}
                                    ShowError={ShowError.passwordError}
                                    Error={PasswordError}

                                />

                            </View>
                            <ButtonComponent
                                styles={{
                                    width: WIDTH * 0.9,
                                    backgroundColor: COLORS.RED,
                                    paddingVertical: ANDROID ? '3.4%' : '5%',
                                    marginBottom: '4%',
                                    borderRadius: 5,
                                    marginTop: 30
                                }}
                                Label={'Login'}
                                Action={() => Submit()}
                                Textstyles={{ color: 'rgba(255, 255, 255, 1)', fontSize: 16, fontFamily: FONT.semiBold }}

                            />
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Login
const styles = StyleSheet.create({
    mainviewStyle: {
        justifyContent: 'center',
        width: WIDTH * 0.9,
        alignSelf: 'center',
        marginVertical: '6%',

    },
    logintext: {
        fontSize: 30,
        fontFamily: FONT.semiBold,
        color: COLORS.BLACK,
        marginTop: 45.84,
        lineHeight: 32.97,
        alignItems: 'center'


    },
    signStyle: {
        fontSize: 14,
        fontFamily: FONT.Regular,
        color: '#78819F',
        lineHeight: 18,
        marginTop: 9
    },

    rememberviewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    accountStyle: {
        flexDirection: 'row',
        width: WIDTH * 0.6,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 13,
        marginLeft: '6%'
    },
    accounttextStyle: {
        fontSize: 14,
        fontFamily: FONT.medium,
        color: COLORS.BLACK,
    },
    signupStyle: {
        fontSize: 14,
        fontFamily: FONT.semiBold,
        color: COLORS.RED,
    },

    Forgotpass: {
        fontSize: 16,
        fontFamily: FONT.semiBold,
        color: COLORS.RED,
        marginTop: '2%'
    },
    RememberTEXT: {
        fontSize: 14,
        fontFamily: FONT.medium,
        color: COLORS.BLACK,
        paddingLeft: 12,
        marginTop: '2%'
    },
    CheakBoxEntireVIEW: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: WIDTH * 0.9,
        alignSelf: "center",
        // backgroundColor:"red"
    },
    CheakBOX: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "rgba(195, 195, 195, 1)",
        width: '11%',
        paddingVertical: '5%',
        borderRadius: 4,


    },
    FALSECHEAK: {
        width: '13%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: ANDROID ? '-1.7%' : '-1.1%'
    },
    inputStyle: {
        marginTop: 40

    },
    logoStyle: {
        marginTop: 84.43,
        alignItems: 'center'
    },
    imgStyle: {
        width: '62%',
        height: 62,
        resizeMode: 'contain'
    },

})