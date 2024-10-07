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

const { HEIGHT, WIDTH } = Dimensions.get('window');

const GroupModal = (props) => {
    const ANDROID = Platform.OS === 'android';
    const Height1 = ANDROID ? HEIGHT * 0.12 : HEIGHT * 0.17;
    const Height2 = ANDROID ? HEIGHT * 0.17 : HEIGHT * 0.2;

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props?.visible}
                // Note: Modal does not accept a 'style' prop. Styling should be applied to its children.
            >
                <TouchableWithoutFeedback onPress={props?.closeModal}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>

                <SafeAreaView
                    style={[
                        StyleSheet.absoluteFill,
                        {
                            height: props?.CreateGroup || props?.DeleteChat ? Height1 : Height2,
                        },
                    ]}
                >
                    <View style={styles.modalContainer}>
                        {props?.CreateGroup && (
                            <TouchableOpacity
                                onPress={props?.Gmember}
                                style={styles.optionContainer}
                            >
                                <Text style={styles.textStyle}>{props?.message}</Text>
                            </TouchableOpacity>
                        )}

                        {props?.line && (
                            <View style={styles.lineStyle}></View>
                        )}

                        {props?.DeleteChat && (
                            <TouchableOpacity
                                onPress={props?.deletechat}
                                style={[styles.optionContainer, { marginTop: '4%' }]}
                            >
                                <Text style={styles.textStyle}>Delete Chat</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // Optional: Add a semi-transparent background
    },
    modalContainer: {
        backgroundColor: 'red',
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
        marginVertical: '2%', // Adjusted for better spacing
    },
});

export default GroupModal;
