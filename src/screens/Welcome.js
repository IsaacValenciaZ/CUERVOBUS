import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import pattern from '../../assets/pattern.png'
import pattern2 from '../../assets/pattern2.png'
import pattern3 from '../../assets/pattern3.png'
import Logo from '../../assets/Logo.jpg'
import Logo2 from '../../assets/Logo2.png'
import { button2 } from '../common/button'

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.patternbg} source={pattern3} />

            <View style={styles.container1}>
                <Image style={styles.logo} source={Logo2} />
                <Text style={button2} onPress={() => navigation.navigate('login')} >Iniciar sesión</Text>
                <Text style={button2} onPress={() => navigation.navigate('signup')}>Crear Cuenta</Text>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
    
    },
    patternbg: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        
    },
    head: {
        fontSize: 30,
        color: '#fff',
    },
    container1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    logo: {
        height: '20%',
        resizeMode: 'contain',
        marginBottom: 50,
        borderRadius:100,
    }
})