// Native Imports
import React from 'react'
import { View, Text, Image, Modal, StyleSheet } from 'react-native'

// Redux
import { connect } from 'react-redux'

// Actions
import { hasAccount, toggleForm } from '../../actions/formActions'
import { logout } from '../../actions/authActions'

// Components
import LoginForm from '../loginForm'
import RegisterForm from '../registerForm'
import Button from '../Button'

const HomeScreen = (props) => {
    const {navigation, form, toggleForm, auth, logout } = props
    const uri = 'https://bitwiseindustries.com/wp-content/uploads/2020/03/owl.png'
    
    let msg = 'Login / Register'
    auth.isRegistered ? msg = 'Login' : msg = 'Login / Register'

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{uri}}/>
            <Text style={styles.header}>GeekBooks</Text>

            { auth.isAuthenticated ? 
            <Button onSelect={() => logout()}style={styles.button} title="Logout" 
            width={'60%'} marginB={20}/> :
            <Button onSelect={() => toggleForm()}style={styles.button} title={msg} 
                width={'60%'} marginB={20}/>
            }

            <Button onSelect={() => navigation.navigate({routeName: 'Dashboard'})} title="Get Started" 
                width={'60%'}/>

            { form.isFormOpen && !auth.isAuthenticated ? 
                <Modal  animationType="slide">
                    { form.hasAccount ? <LoginForm /> : <RegisterForm /> }
                </Modal> 
            : null}
            {/* <Text style={{fontSize: 30}} onPress={() => console.log(auth)}>Test Me</Text> */}
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
        fontSize: 40,
        marginTop: 0,
        marginBottom: 15,
    },
    image: {
        width: 200,
        height: 200,
    },
})

const mapStateToProps = (state) => ({
    form: state.form,
    auth: state.auth
})

export default connect(mapStateToProps, { toggleForm, hasAccount, logout })(HomeScreen)