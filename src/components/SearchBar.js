import React from 'react';
import {View, Text, TextInput, StyleSheet} from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchBar = () => {
    return <View style={styles.container}>
        <Feather name="search" style={styles.searchIcon}/>
        <TextInput placeholder="Search" style={styles.input}/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },

    searchIcon: {
        fontSize: 35,
        alignSelf: 'center'
    },

    input: {
        marginStart: 10,
        flex: 1
    }
});

export default SearchBar;
