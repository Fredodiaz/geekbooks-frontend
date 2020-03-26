// Native Imports
import React from 'react'
import { View, Text, Image, Modal, StyleSheet } from 'react-native'

// Redux
import { connect } from 'react-redux'

// Actions
import { hasAccount, toggleForm } from '../../actions/formActions'

// Components
import LoginForm from '../loginForm'
import RegisterForm from '../registerForm'
import Button from '../Button'

const HomeScreen = (props) => {
    const {navigation, form, toggleForm } = props
    const uri = 'https://bitwiseindustries.com/wp-content/uploads/2020/03/owl.png'

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{uri}}/>
            <Text style={styles.header}>GeekBooks</Text>
            <Button onSelect={() => toggleForm()}style={styles.button} title="Login / Register" 
                width={'60%'} marginB={20}/>
            <Button onSelect={() => navigation.navigate({routeName: 'Dashboard'})} title="Get Started" 
                width={'60%'}/>

            { form.isFormOpen ? 
                <Modal  animationType="slide">
                    { form.hasAccount ? <LoginForm /> : <RegisterForm /> }
                </Modal> 
            : null}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: 50,
    },
    image: {
        width: 200,
        height: 200,
    },
})

const mapStateToProps = (state) => ({
    form: state.form
})

export default connect(mapStateToProps, { toggleForm, hasAccount })(HomeScreen)