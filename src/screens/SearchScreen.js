import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    return <View style={styles.container}>
        <SearchBar style={styles.searchBar}/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    searchBar: {
        marginVertical: 10
    }
});

export default SearchScreen
