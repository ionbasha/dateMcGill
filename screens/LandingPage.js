import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const LandingPage = () => {
  return (
    <View style={styles.titleText}>
        <Text style={{fontSize: 40, fontFamily: 'DamascusBold'}}>date<Text 
        style={{fontSize: 40, fontFamily: 'DamascusBold', color: 'red'}}>
            McGill</Text>
        </Text>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonDetails} activeOpacity={0.7}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDetails} activeOpacity={0.7}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    titleText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
    },

    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },

    buttonDetails: {
        backgroundColor:'red',
        borderRadius: 30,
        padding: 18,
        marginTop: 40,
        width: 200,
    },

    buttonText: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'DamascusBold',
        textAlign: 'center'
    }
})

export default LandingPage;