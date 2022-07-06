import React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const HomeScreen = ({ navigation }) => {
 
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
             <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle='dark-content'
            hidden={false} />
             <Text>HomeScreen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextInputsty : {
        width: '80%',
        marginBottom:5
    },
    Buttonsty:{
        width: '40%',
        marginBottom:5
    }
  });
export default HomeScreen;
