// Native Imports
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is the Profile Screen!</Text>
            <Button title="Go to Book Detail" onPress={() => navigation.navigate({routeName: 'BookDetail'})}/>
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

export default ProfileScreen