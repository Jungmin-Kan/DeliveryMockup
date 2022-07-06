import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { ListItem, Avatar, Button, Banner, HStack, Box } from "@react-native-material/core";
import Collapsible from 'react-native-collapsible';

const MarvelList = [
    { id: 1, name: 'Black Panter' },
    { id: 2, name: 'Black Widow' },
    { id: 3, name: 'Captain America' },
    { id: 4, name: 'The Collector' },
    { id: 5, name: 'Doctor Strange' },
    { id: 6, name: 'Hawkeye' },
    { id: 7, name: 'Heimdall' },
    { id: 8, name: 'Hela' },
    { id: 9, name: 'Hulk' },
    { id: 10, name: 'Iron Man' },
    { id: 11, name: 'Loki' },
    { id: 12, name: 'Nick Fury' },
    { id: 13, name: 'Falcon' },
    { id: 14, name: 'Wanda Maximoff' },
    { id: 15, name: 'Shocker' },
    { id: 16, name: 'Spider-Man' },
    { id: 17, name: 'Thanos' },
    { id: 18, name: 'Thor' },
    { id: 19, name: 'Valkyrie' },
    { id: 20, name: 'Vision' },
    { id: 21, name: 'Vulture' },
    { id: 22, name: 'War Machine' },
    { id: 23, name: 'Winter Solder' },
];


const NewOrderScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>NewOrderScreen</Text>
    </SafeAreaView>
    )
}

export default NewOrderScreen;
