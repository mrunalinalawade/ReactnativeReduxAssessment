import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { WIDTH, HEIGHT } from '../Components/Helpers/Dimensions';
import { VECTOR_ICONS } from '../assets/Theme';
import GroupModal from '../Components/GroupModal';

const Home = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.subhead}>
        <Text style={styles.exporetxt}>Home</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <VECTOR_ICONS.Entypo name="dots-three-vertical" size={20} color={'black'} style={{ height: HEIGHT * 0.03 }} />
        </TouchableOpacity>
      </View>
      
      <GroupModal
        visible={modalVisible}  // Pass the modalVisible state here
        Gmember={() => { 
          props.navigation.navigate('');  // Make sure to provide a valid route
          setModalVisible(false); 
        }}
        deletechat={() => setModalVisible(false)}
        closeModal={() => setModalVisible(false)}
        CreateGroup
        message='Create Group'
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 3,
  },
  subhead: {
    width: WIDTH * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingVertical: 15,
    marginTop: 8,
  },
  exporetxt: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000000',
  },
});
