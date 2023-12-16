import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native'

const CreateAccount = () => {

    [firstName, setfirstName] = useState('');
    [lastName, setLastName] = useState('');
    // Something for gender
    [email, setEmail] = useState('');
    [password, setPassword] = useState('');
    [confirmPassword, setConfirmPassword] = useState('');

    return (
      <View style={styles.screenDetails}>
         <TextInput 
            id = "firstName"
            style={styles.inputs} 
            placeholder = "First name" 
            placeholderTextColor = "grey"
            spellCheck={false}
            autoCorrect={false}/>
         <TextInput 
            id = "lastName"
            style={styles.inputs} 
            placeholder = "Last name" 
            placeholderTextColor = "grey" 
            spellCheck={false}
            autoCorrect={false}/>
         <View id="genders"> 
            <Text style={{color: 'red'}}>GENDER BUTTONS GO HERE</Text>
         </View>
         <TextInput style={styles.inputs} 
            id = "email"
            placeholder = "Email" 
            placeholderTextColor = "grey" 
            autoCapitalize = "none"
            spellCheck={false}
            autoCorrect={false}/>
         <TextInput style={styles.inputs} 
            id = "password"
            placeholder = "Password" 
            placeholderTextColor = "grey" 
            autoCapitalize = "none"
            secureTextEntry={true}
            spellCheck={false}
            autoCorrect={false}/>
         <TextInput style={styles.inputs} 
            id = "confirmPassword"
            placeholder = "Confirm password" 
            placeholderTextColor = "grey" 
            autoCapitalize = "none"
            secureTextEntry={true}
            spellCheck={false}
            autoCorrect={false}/>
         <TouchableOpacity style={styles.signUpButton} activeOpacity={0.7}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
         </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  screenDetails: {
    alignItems: 'center',
    marginTop: 50,
  },
  inputs: {
    height: 50,
    width: 300,
    fontSize: 16,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    textAlign: 'center',
    margin: 15,
  },
  signUpButton: {
    backgroundColor:'limegreen',
    borderRadius: 30,
    padding: 12,
    marginTop: 70,
    width: 120,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'DamascusBold',
    textAlign: 'center'
  }

})

export default CreateAccount;
