// Native Imports
import React, { useState } from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'

// Redux
import { connect } from 'react-redux'

// Actions
import { toggleForm, hasAccount } from '../actions/formActions'

// Components
import Button from './Button'

const LoginForm = ({toggleForm, hasAccount}) => {
    const [password, changePasswordText] = useState('Password')
    const [name, changeNameText] = useState('Username')
    const uri = 'https://bitwiseindustries.com/wp-content/uploads/2020/03/owl.png'
    
    return (
        <View style={styles.container}>
            <View style={styles.exitWrap}>
                <Text onPress={() => toggleForm()} style={styles.exitText}>X</Text>
            </View>

            <Image style={styles.image} source={{uri}}/>
            <Text style={styles.header}>Login</Text>
            <TextInput onChangeText={(text) => changeNameText(text)} style={styles.input} value={name}/>
            <TextInput onChangeText={(text) => changePasswordText(text)} style={styles.input} value={password}/>
            <Button onSelect={() => hasAccount()} marginB={15} title="Login!" width={'60%'}/>

            <View style={styles.textWrap}>
                <Text style={styles.text}>Don't have an account? </Text>
                <Text style={[styles.text, { color: 'blue' }]} onPress={() => hasAccount()}>Register</Text>
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
        fontSize: 17,
    }
})

const mapStateToProps = (state) => ({
    form: state.form
})

export default connect(mapStateToProps, { toggleForm, hasAccount })(LoginForm)