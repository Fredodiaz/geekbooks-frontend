// Native Imports
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

// Redux
import { connect } from 'react-redux'

const ProfileScreen = ({navigation, auth}) => {
    return (
        <View style={styles.container}>
            <Text>This is the Profile Screen!</Text>

            <Button title="Go to Book Detail" 
            onPress={() => navigation.navigate({routeName: 'BookDetail'})}/>

            <Text style={styles.prompt}>
                {auth.isAuthenticated ? `Welcome ${auth.user.user}` : 'Not signed in.'}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    prompt: {
        marginTop: 10,
        fontSize: 20
    }
})

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(ProfileScreen)