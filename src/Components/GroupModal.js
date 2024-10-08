import { 
    StyleSheet, 
    Text, 
    View, 
    Modal, 
    SafeAreaView, 
    TouchableOpacity, 
    TouchableWithoutFeedback, 
    Platform, 
    Dimensions
} from 'react-native';
import React from 'react';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

const GroupModal = (props) => {
    const ANDROID = Platform.OS === 'android';
    const Height1 = ANDROID ? HEIGHT * 0.12 : HEIGHT * 0.17;
    const Height2 = ANDROID ? HEIGHT * 0.17 : HEIGHT * 0.25; // Adjusted to fit all options

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props?.visible}
            >
                <TouchableWithoutFeedback onPress={props?.closeModal}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>

                <SafeAreaView
                    style={[StyleSheet.absoluteFill, {
                        height: props?.CreateGroup || props?.DeleteChat ? Height1 : Height2,
                    }]}
                >
                    <View style={styles.modalContainer}>
                        {/* Electronics Option */}
                        <TouchableOpacity
                            onPress={props?.onElectronicsPress}
                            style={styles.optionContainer}
                        >
                            <Text style={styles.textStyle}>Electronics</Text>
                        </TouchableOpacity>

                        {/* Jewelry Option */}
                        <TouchableOpacity
                            onPress={props?.onJewelryPress}
                            style={styles.optionContainer}
                        >
                            <Text style={styles.textStyle}>Jewelry</Text>
                        </TouchableOpacity>

                        {/* Men Option */}
                        <TouchableOpacity
                            onPress={props?.onMenPress}
                            style={styles.optionContainer}
                        >
                            <Text style={styles.textStyle}>Men</Text>
                        </TouchableOpacity>

                        {/* Women Option */}
                        <TouchableOpacity
                            onPress={props?.onWomenPress}
                            style={styles.optionContainer}
                        >
                            <Text style={styles.textStyle}>Women</Text>
                        </TouchableOpacity>

                        {/* Divider Line */}
                        <View style={styles.lineStyle}></View>

                        {/* Logout Option */}
                        <TouchableOpacity
                            onPress={props?.onLogoutPress}
                            style={[styles.optionContainer, { marginTop: '4%' }]}
                        >
                            <Text style={styles.textStyle}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', 
    },
    modalContainer: {
        backgroundColor: 'white',
        width: "45%",
        padding: 10,
        marginTop: "10%",
        alignSelf: "flex-end",
        borderRadius: 3,
        marginRight: '7%',
        borderColor: '#000',
        borderWidth: 1,
    },
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
    },
    textStyle: {
        color: '#000',
        fontSize: 14,
        marginLeft: "8%",
    },
    lineStyle: {
        width: WIDTH * 0.45,
        backgroundColor: '#000',
        height: HEIGHT * 0.001,
        alignSelf: 'center',
        marginVertical: '2%',
    },
});

export default GroupModal;
