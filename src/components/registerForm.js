// Native Imports
import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'

// Redux
import { connect } from 'react-redux'

// Actions
import { toggleForm, hasAccount } from '../actions/formActions'
import { register } from '../actions/authActions'

// Icons
import { Ionicons } from '@expo/vector-icons';

// Components
import Button from './Button'

const RegisterForm = ( props ) => {
    const { toggleForm, hasAccount, register, auth } = props

    const [email, changeEmailText] = useState('Email')
    const [name, changeNameText] = useState('Username')
    const [password, changePasswordText] = useState('Password')
    const uri = 'https://bitwiseindustries.com/wp-content/uploads/2020/03/owl.png'

    // Handles logic for register such as invalid password
    const handleRegister = (name, email, password) => {
        register(name, email, password)
    }

    // Checks if user registered and redirects to login
    useEffect(() => {
        auth.isRegistered ? hasAccount() : null
    }, [auth])
    
    return (
        <View style={styles.container}>

            {/* X Button to Toggle Form Off */}
            <View style={styles.exitWrap}>
                <Ionicons onPress={() => toggleForm()} name="ios-close" size={60} color={'black'}/>
            </View>

            <Image style={styles.image} source={{uri}}/>
            <Text style={styles.header}>Register</Text>

            {/* Form for Registering */}
            <TextInput onChangeText={(text) => changeEmailText(text)} style={styles.input} value={email}/>
            <TextInput onChangeText={(text) => changeNameText(text)} style={styles.input} value={name}/>
            <TextInput onChangeText={(text) => changePasswordText(text)} style={styles.input} value={password}/>
            <Button onSelect={() => handleRegister(name, email, password)} marginB={15} title="Register!" width={'60%'}/>

            {/* Redirect if User Chooses to Login */}
            <View style={styles.textWrap}>
                <Text style={styles.text}>Already have an account? </Text>
                <Text style={[styles.text, { color: 'blue' }]} onPress={() => hasAccount()}>Login</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    exitWrap: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    exitText: {
        fontSize: 36,
    },
    image: {
        width: 200,
        height: 200,
    },
    header: {
        fontSize: 35,
    },
    input: {
        borderWidth: 1,
        width: '60%',
        marginVertical: 10,
        padding: 5,
        borderRadius: 5,
    },
    textWrap: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 17
    }
})

const mapStateToProps = (state) => ({
    form: state.form,
    auth: state.auth
})

export default connect(mapStateToProps, { toggleForm, hasAccount, register })(RegisterForm)