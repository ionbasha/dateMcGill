import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import { RadioButton } from 'react-native-paper';

const CreateAccount = () => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [genderAm, setGenderAm] = useState('');
    const [genderShow, setGenderShow] = useState(''); // Something for gender
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [major, setMajor] = useState('');
    const [password, setPassword] = useState('');
    const [somethingToKnow, setSomethingToKnow] = useState('');

    return (
      <View style={styles.screenDetails}>
         <TextInput 
            id = "firstName"
            value={firstName}
            style={styles.inputs} 
            placeholder = "First name" 
            placeholderTextColor = "grey"
            spellCheck={false}
            autoCorrect={false}
            onChangeText={text => setfirstName(text)}/>
         <TextInput 
            id = "lastName"
            value={lastName}
            style={styles.inputs} 
            placeholder = "Last name" 
            placeholderTextColor = "grey" 
            spellCheck={false}
            autoCorrect={false}
            onChangeText={text => setLastName(text)}/>
         <Text style={{marginBottom: 5, fontFamily: 'DamascusBold'}}>I am:</Text>
         <Text>Male           Female          Other</Text>
         <View style={{gap: 42}} flexDirection = 'row'>
            <RadioButton.Android 
            color='limegreen'
            value = 'M'
            status = { genderAm === 'M' ? 'checked' : 'unchecked' }
            onPress = {() => setGenderAm('M')}
            />
            <RadioButton.Android 
            color='limegreen'
            value = 'F'
            status = { genderAm === 'F' ? 'checked' : 'unchecked' }
            onPress = {() => setGenderAm('F')}
            />
            <RadioButton.Android 
            color='limegreen'
            value = 'O'
            status = { genderAm === 'O' ? 'checked' : 'unchecked' }
            onPress = {() => setGenderAm('O')}
            />
         </View>
         <Text style={{margin: 5, fontFamily: 'DamascusBold'}}>Show me:</Text>
         <Text>Male           Female          Other</Text>
         <View style={{gap: 42}} flexDirection = 'row'>
            <RadioButton.Android 
            color='limegreen'
            value = 'M'
            status = { genderShow === 'M' ? 'checked' : 'unchecked' }
            onPress = {() => setGenderShow('M')}
            />
            <RadioButton.Android 
            color='limegreen'
            value = 'F'
            status = { genderShow === 'F' ? 'checked' : 'unchecked' }
            onPress = {() => setGenderShow('F')}
            />
            <RadioButton.Android 
            color='limegreen'
            value = 'O'
            status = { genderShow === 'O' ? 'checked' : 'unchecked' }
            onPress = {() => setGenderShow('O')}
            />
         </View>
         <TextInput 
            id = "age"
            value={age}
            style={styles.inputs} 
            placeholder = "Age" 
            placeholderTextColor = "grey"
            onChangeText={text => setAge(text)}/>
         <TextInput style={styles.inputs} 
            id = "email"
            value={email}
            placeholder = "Email" 
            placeholderTextColor = "grey" 
            autoCapitalize = "none"
            spellCheck={false}
            autoCorrect={false}
            onChangeText={text => setEmail(text)}/>
         <TextInput style={styles.inputs} 
            id = "password"
            value={password}
            placeholder = "Password" 
            placeholderTextColor = "grey" 
            autoCapitalize = "none"
            secureTextEntry={true}
            spellCheck={false}
            autoCorrect={false}
            onChangeText={text => setPassword(text)}/>
         <TextInput 
            id = "major"
            value={major}
            style={styles.inputs} 
            placeholder = "Major" 
            placeholderTextColor = "grey"
            onChangeText={text => setMajor(text)}/>
         <TextInput style={styles.inputs} 
            id = "somethingToKnow"
            value={somethingToKnow}
            placeholder = "Something to know about me is..." 
            placeholderTextColor = "grey" 
            autoCapitalize = "none"
            spellCheck={false}
            autoCorrect={false}
            onChangeText={text => setSomethingToKnow(text)}/>
         <TouchableOpacity style={styles.signUpButton} activeOpacity={0.7} onPress={() => console.log(
            "I am: " + genderAm + "\n" +
            "Show me: " + genderShow
         )}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
         </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  screenDetails: {
    alignItems: 'center',
    marginTop: 5,
  },
  inputs: {
    height: 42,
    width: 300,
    fontSize: 16,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    textAlign: 'center',
    margin: 13,
  },
  signUpButton: {
    backgroundColor:'limegreen',
    borderRadius: 30,
    padding: 12,
    marginTop: 5,
    width: 120,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'DamascusBold',
    textAlign: 'center'
  },
  radioButtonDesign: {
    color: "grey",
    flexDirection: "row",
    alignItems: 'center'  
  }

})

export default CreateAccount;
