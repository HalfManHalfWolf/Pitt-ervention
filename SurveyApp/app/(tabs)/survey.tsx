import React from 'react';
import {FlatList, StyleSheet, Text, View } from 'react-native';

export default function SurveyScreen() {
return (
<View style ={styles.container}>
<FlatList data= {[{key: 'Question 1'},
{key: 'Question 2'},
{key: 'Question 3'},
{key: 'Question 4'},
{key: 'Question 5'},
]}

    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} />
</View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 10,
        height: 44
    }
})