// Native Imports
import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({onSelect, title, width, marginB}) => {
    return (
        <TouchableOpacity onPress={onSelect} style={
            [styles.button, { width }, {marginBottom: marginB}]
            }>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 9,
        backgroundColor: '#00aeef',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        elevation: 5,
    },

    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 17
    },

})

export default Button