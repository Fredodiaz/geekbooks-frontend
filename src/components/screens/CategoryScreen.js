// Native Imports
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CategoryScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is the Category Screen!</Text>
            <Button title="Go to Type of Book" onPress={() => navigation.navigate({routeName: 'BookDetail'})}/>
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

export default CategoryScreen