import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const cuervobus = require('../../assets/Logo2.png');
const StudentCard = ({ navigation }) => {
  const [nombre] = useState('Carlos Ramires');
  const [grupo] = useState('52');
  const [semestre] = useState('5');
  const [carrera] = useState('Desarrrollo de Software Multiplataforma');
  const [qrCodeValue, setQrCodeValue] = useState('');

  const generateQRCode = () => {
    const data = {
      nombre,
      grupo,
      semestre,
    };
    setQrCodeValue(JSON.stringify(data));
  };

  return (
    <View>
      <Text style={styles.letrero}>Universidad Tecnologica del Valle de Toluca</Text>

      <View style={styles.card}>
        <Text style={styles.titulo}>Datos Del ALUMNO</Text>

        <View style={styles.header}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.text}>{nombre}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.label}>Grupo:</Text>
          <Text style={styles.text}>{grupo}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.label}>Semetre:</Text>
          <Text style={styles.text}>{semestre}</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.label}>Carrera:</Text>
          <Text style={styles.text}>{carrera}</Text>
        </View>
        <Text style={styles.qr}>
        {qrCodeValue && (
        <QRCode value={qrCodeValue} size={150} color={'green'} />
      )}
      </Text>
      </View>

      <TouchableOpacity style={styles.button2} onPress={generateQRCode}>
        <Text style={styles.buttonText}> Generar codigo</Text>
      </TouchableOpacity>

    
      <View style={styles.circle}>
      <Image source={cuervobus} style={styles.logo} />
      </View>
    </View>
  );
};


export default StudentCard;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 20,
    marginTop: 16,
    top:50,
    height:400
    
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 100,
    marginRight: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  text: {
    flex: 1,
  },
  qr: {
   justifyContent:'center',
  padding:30,
  left:80,
  },
  button2: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 50,
    fontSize: 20,
    minWidth: 150,
    margin: 25,
    bottom:-80
},
letrero: {
  backgroundColor: 'green',
  color: '#fff',
  padding: 10,
  borderRadius: 10,
  fontSize: 20,
  minWidth: 150,
  textAlign: 'center',
  margin: 25,
  bottom:-60,
  textTransform: 'uppercase',
},

titulo:{
  fontSize: 24,
  fontWeight: 'bold',
  color: 'green',
  textTransform: 'uppercase',
  textAlign: 'center',
  marginVertical: 16,

},
buttonText: {
  color: '#fff',
  fontSize: 20,
  textAlign: 'center',
},
circle: {
  width: 50,
  height: 50,
  borderRadius: 25, 
  backgroundColor: 'white', // Color de fondo del círculo
  justifyContent: 'center',
  alignItems: 'center',
  padding:50,
  left:160,
  bottom:-100,
},
logo: {
  width: 40,
  height: 40,
},


});
