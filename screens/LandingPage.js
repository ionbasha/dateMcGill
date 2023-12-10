import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const LandingPage = () => {
  return (
    <View style={styles.titleText}>
        <Text style={{fontSize: 40, fontFamily: 'DamascusBold'}}>dateMcGill</Text>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonDetails}>
                <Text style={{fontSize: 10, fontFamily: 'DamascusBold'}}>Create Account</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    titleText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttons: {
        activeOpacity: 1,
        padding: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonDetails: {
        backgroundColor:'tomato',
        borderRadius: 30,
    }
})

export default LandingPage;