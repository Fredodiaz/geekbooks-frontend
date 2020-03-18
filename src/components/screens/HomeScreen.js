// Native Imports
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is the Home Screen!</Text>
            <Button onPress={() => navigation.navigate({routeName: 'Dashboard'})} title="Go to Dashboard"/>
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

export default HomeScreen