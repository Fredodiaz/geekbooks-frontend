// Native Imports
import React, { useState } from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'

// Redux
import { connect } from 'react-redux'

// Actions
import { toggleForm, hasAccount } from '../actions/formActions'
import { login, redoRegister } from '../actions/authActions'

// Icons
import { Ionicons } from '@expo/vector-icons';

// Components
import Button from './Button'

const LoginForm = ( props ) => {
    const { toggleForm, hasAccount, login, auth, redoRegister } = props

    const [password, changePasswordText] = useState('Password')
    const [name, changeNameText] = useState('Username')
    const uri = 'https://bitwiseindustries.com/wp-content/uploads/2020/03/owl.png'

    // Handles form input logic such as no text inputed
    const handleSubmit = () => {

    }

    // Handles logic of form changing
    const handleFormChange = () => {
        redoRegister(); 
        hasAccount();
    }
    
    return (
        <View style={styles.container}>

            {/* X Button to Toggle Form Off */}
            <View style={styles.exitWrap}>
                <Ionicons onPress={() => toggleForm()} name="ios-close" size={60} color={'black'}/>
            </View>

            { auth.isRegistered ? 
                <View>
                    <Text style={styles.successText}>Successfuly Registered!</Text>
                    <Text style={styles.successText}>Login to get started</Text>
                </View>
            : null }
            
            <Image style={styles.image} source={{uri}}/>
            <Text style={styles.header}>Login</Text>

            {/* Form for Logging In  */}
            <TextInput onChangeText={(text) => changeNameText(text)} style={styles.input} value={name}/>
            <TextInput onChangeText={(text) => changePasswordText(text)} style={styles.input} value={password}/>
            <Button onSelect={() => login(name, password)} marginB={15} title="Login!" width={'60%'}/>

            {/* Redirect if User Chooses to Login */}
            { auth.isRegistered ? 
                <View style={styles.textWrap}>
                    <Text style={styles.text}>Register again? </Text>
                    <Text style={[styles.text, { color: 'blue' }]} onPress={() => handleFormChange()}>Register</Text>
                </View>    
                : 
                <View style={styles.textWrap}>
                    <Text style={styles.text}>Don't have an account? </Text>
                    <Text style={[styles.text, { color: 'blue' }]} onPress={() => hasAccount()}>Register</Text>
                </View>
            }
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
        fontSize: 17,
    },
    successTextWrap: {
        marginBottom: 15,
        marginTop: -22,
    },
    successText: {
        textAlign: 'center',
        fontSize: 22,
    }
})

const mapStateToProps = (state) => ({
    form: state.form,
    auth: state.auth
})

export default connect(mapStateToProps, { toggleForm, hasAccount, login, redoRegister })(LoginForm)