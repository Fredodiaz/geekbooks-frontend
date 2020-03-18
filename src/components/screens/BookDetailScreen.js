// Native Imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BookDetailScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is the Book Detail Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default BookDetailScreen