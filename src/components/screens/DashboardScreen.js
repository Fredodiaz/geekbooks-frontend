// Native Imports
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const DashboardScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is the Dashboard Screen!</Text>
            <Button onPress={() => navigation.navigate({routeName: 'Category'})} title="Go to Type of Category" />
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

export default DashboardScreen