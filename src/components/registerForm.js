// Native Imports
import React, { useState } from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'

// Redux
import { connect } from 'react-redux'

// Actions
import { toggleForm, hasAccount } from '../actions/formActions'

// Components
import Button from './Button'

const RegisterForm = ({toggleForm, hasAccount}) => {
    const [email, changeEmailText] = useState('Email')
    const [name, changeNameText] = useState('Username')
    const [password, changePasswordText] = useState('Password')
    const uri = 'https://bitwiseindustries.com/wp-content/uploads/2020/03/owl.png'
    
    return (
        <View style={styles.container}>
            <View style={styles.exitWrap}>
                <Text onPress={() => toggleForm()} style={styles.exitText}>X</Text>
            </View>

            <Image style={styles.image} source={{uri}}/>
            <Text style={styles.header}>Register</Text>
            <TextInput onChangeText={(text) => changeEmailText(text)} style={styles.input} value={email}/>
            <TextInput onChangeText={(text) => changeNameText(text)} style={styles.input} value={name}/>
            <TextInput onChangeText={(text) => changePasswordText(text)} style={styles.input} value={password}/>

            <Button onSelect={() => toggleForm()} marginB={15} title="Register!" width={'60%'}/>
            {/* <Button onSelect={() => toggleForm()} title="Go Back" width={'40%'}/> */}

            <View style={styles.textWrap}>
                <Text style={styles.text}>Don't have an account? </Text>
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
    form: state.form
})

export default connect(mapStateToProps, { toggleForm, hasAccount })(RegisterForm)