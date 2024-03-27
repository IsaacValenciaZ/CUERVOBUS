import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import pattern from '../../assets/pattern.png'
import pattern2 from '../../assets/pattern2.png'
import pattern3 from '../../assets/pattern3.png'
import Logo from '../../assets/Logo.jpg'
import Logo2 from '../../assets/Logo2.png'
import { button1 } from '../common/button'
import { errormessage, formgroup, head1, head2, input, label, link, link2 } from '../common/formcss'

const Login = ({ navigation }) => {
    const [fdata, setFdata] = useState({
        email: '',
        password: ''
    })

    const [errormsg, setErrormsg] = useState(null);

    const Sendtobackend = () => {
        // console.log(fdata);
        if (fdata.email == '' || fdata.password == '') {
            setErrormsg('Todos los campos son obligatorios.');
            return;
        }
        else {
            fetch('http://192.168.100.7/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fdata)
            })
                .then(res => res.json()).then(
                    data => {
                        // console.log(data);
                        if (data.error) {
                            setErrormsg(data.error);
                        }
                        else {
                            alert('Inicio ¡Exitoso!');
                            navigation.navigate('maps');
                        }
                    }
                )
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.patternbg} source={pattern3} />

            <View style={styles.container1} >
                <View style={styles.s1}>
                    <Image style={styles.logo} source={Logo2} />
                    <Text style={styles.h1} onPress={() => navigation.navigate('welcome')}>El aventón del Cuervo.</Text>
                    <Text style={styles.small1}>UTVT</Text>
                </View>
                <View style={styles.s2}>

                    <Text style={head1}>Iniciar Sesión</Text>
                    <Text style={head2}>Inicia sesión para continuar</Text>
                    {
                        errormsg ? <Text style={errormessage}>{errormsg}</Text> : null
                    }
                    <View style={formgroup}>
                        <Text style={label}>Gmail</Text>
                        <TextInput style={input}
                            placeholder="Ingresa tu gmail"

                            onPressIn={() => setErrormsg(null)}
                            onChangeText={(text) => setFdata({ ...fdata, email: text })}
                        />
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Contraseña</Text>
                        <TextInput style={input}
                            placeholder="Ingresa tu contraseña"

                            secureTextEntry={true}

                            onChangeText={(text) => setFdata({ ...fdata, password: text })}
                            onPressIn={() => setErrormsg(null)}
                        />
                    </View>
                   {/*<View style={styles.fp}>
                        <Text style={link}>Forgot Password?</Text>
                    </View> */ } 
                    <Text style={button1}
                        onPress={() => Sendtobackend()}
                    >Entrar</Text>

                    <Text style={link2}>¿No tienes un cuenta?&nbsp;
                        <Text style={link}
                            onPress={() => navigation.navigate('signup')}
                        >
                            Crea una nueva cuenta.
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login

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
    container1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        
    },
    s1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40%',
    },
    small1: {
        color: '#424242',
        fontSize: 17,
    }
    ,
    h1: {
        fontSize: 30,
        color: '#424242',
    },
    s2: {
        display: 'flex',
        backgroundColor:'black',
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    formgroup: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginVertical: 10,
        
    },
    label: {
        fontSize: 17,
        color: 'white',
        marginLeft: 10,
        marginBottom: 5,
    },
    input: {
        backgroundColor: "#FFB0CC",
        borderRadius: 20,
        padding: 10,
    },
    fp: {
        display: 'flex',
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    logo: {
        height: 80,
        resizeMode: 'contain',
    }
})