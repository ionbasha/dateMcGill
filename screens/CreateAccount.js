import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import { RadioButton } from 'react-native-paper';

const CreateAccount = () => {

   const [userData, setUserData] = useState({
      firstName: '',
      lastName: '',
      genderAm: '',
      genderShow: '',
      age: '',
      email: '',
      major: '',
      password: '',
      somethingToKnow: ''
   })

    const handlePress = () => {
      console.log(userData)
      console.log(
         "Hi, Im " + userData.firstName + "\n" +
         "and I am a " + userData.genderAm + " looking for " + userData.genderShow
      )
    }

    return (
      <View style={styles.screenDetails}>
         <TextInput 
            id = "firstName"
            value={userData.firstName}
            style={styles.inputs} 
            placeholder = "First name" 
            placeholderTextColor = "grey"
            spellCheck={false}
            autoCorrect={false}
            onChangeText={text => setUserData({...userData, firstName: text})}/>
         <TextInput 
            id = "lastName"
            value={userData.lastName}
            style={styles.inputs} 
            placeholder = "Last name" 
            placeholderTextColor = "grey" 
            spellCheck={false}
            autoCorrect={false}
            onChangeText={text => setUserData({...userData, lastName: text})}/>
         <Text style={{marginBottom: 5, fontFamily: 'DamascusBold'}}>I am:</Text>
         <Text>Male           Female          Other</Text>
         <View style={{gap: 42}} flexDirection = 'row'>
            <RadioButton.Android 
            color='limegreen'
            value = {userData.genderAm}
            status = { userData.genderAm === 'M' ? 'checked' : 'unchecked' }
            onPress={() => setUserData({...userData, genderAm: 'M'})}
            />
            <RadioButton.Android 
            color='limegreen'
            value = {userData.genderAm}
            status = { userData.genderAm === 'F' ? 'checked' : 'unchecked' }
            onPress={() => setUserData({...userData, genderAm: 'F'})}
            />
            <RadioButton.Android 
            color='limegreen'
            value = {userData.genderAm}
            status = { userData.genderAm === 'O' ? 'checked' : 'unchecked' }
            onPress={() => setUserData({...userData, genderAm: 'O'})}
            />
         </View>
         <Text style={{margin: 5, fontFamily: 'DamascusBold'}}>Show me:</Text>
         <Text>Male           Female          Other</Text>
         <View style={{gap: 42}} flexDirection = 'row'>
            <RadioButton.Android 
            color='limegreen'
            value = 'M'
            status = { userData.genderShow === 'M' ? 'checked' : 'unchecked' }
            onPress={() => setUserData({...userData, genderShow: 'M'})}
            />
            <RadioButton.Android 
            color='limegreen'
            value = 'F'
            status = { userData.genderShow === 'F' ? 'checked' : 'unchecked' }
            onPress={() => setUserData({...userData, genderShow: 'F'})}
            />
            <RadioButton.Android 
            color='limegreen'
            value = 'O'
            status = { userData.genderShow === 'O' ? 'checked' : 'unchecked' }
            onPress={() => setUserData({...userData, genderShow: 'O'})}
            />
         </View>
         <TextInput 
            id = "age"
            value={userData.age}
            style={styles.inputs} 
            placeholder = "Age" 
            placeholderTextColor = "grey"
            onChangeText={text => setUserData({...userData, age: text})} />
         <TextInput style={styles.inputs} 
            id = "email"
            value={userData.email}
            placeholder = "Email" 
            placeholderTextColor = "grey" 
            autoCapitalize = "none"
            spellCheck={false}
            autoCorrect={false}
            onChangeText={text => setUserData({...userData, email: text})} />
         <TextInput style={styles.inputs} 
            id = "password"
            value={userData.password}
            placeholder = "Password" 
            placeholderTextColor = "grey" 
            autoCapitalize = "none"
            secureTextEntry={true}
            spellCheck={false}
            autoCorrect={false}
            onChangeText={text => setUserData({...userData, password: text})} />
         <TextInput 
            id = "major"
            value={userData.major}
            style={styles.inputs} 
            placeholder = "Major" 
            placeholderTextColor = "grey"
            onChangeText={text => setUserData({...userData, major: text})} />
         <TextInput style={styles.inputs} 
            id = "somethingToKnow"
            value={userData.somethingToKnow}
            placeholder = "Something to know about me is..." 
            placeholderTextColor = "grey" 
            autoCapitalize = "none"
            spellCheck={false}
            autoCorrect={false}
            onChangeText={text => setUserData({...userData, somethingToKnow: text})} />
         <TouchableOpacity style={styles.signUpButton} activeOpacity={0.7} onPress={handlePress}>
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
    margin: 10,
  },
  signUpButton: {
    backgroundColor:'limegreen',
    borderRadius: 30,
    padding: 12,
    marginTop: 50,
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
