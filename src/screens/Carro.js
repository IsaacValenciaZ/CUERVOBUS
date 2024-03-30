import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Carro =({ navigation }) =>{
  const cuervobus = require('../../assets/Logo2.png');
  const [nombre] = useState('Luis Alfonso Diaz');
  const [matricula] = useState('KLSD-DSD');
  const [days] = useState(['L', 'M', 'X', 'J', 'V', 'S', 'D']);
  const [drivingDays] = useState(['L', 'M', 'X']);

 
  return (
    <View>
      <Text style={styles.letrero}>Universidad Tecnologica del Valle de Toluca</Text>
      <TouchableOpacity style={styles.informacion}>
          <Icon name="bus" size={20} color="#fff"  onPress={() => navigation.navigate('conductor')}/>
        </TouchableOpacity>
    <View style={styles.container}>
      
    <Text style={styles.titulo}>Datos Del Transporte</Text>

      <View style={styles.header}>
        <Text style={styles.label}>Nombre del Conductor:</Text>
        <Text style={styles.text}>{nombre}</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.label}>Matricula del Autobus:</Text>
        <Text style={styles.text}>{matricula}</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.label}>Dias de Manejo:</Text>
        <View style={styles.dayContainer}>
          {days.map((day, index) => (
            <Text
              key={index}
              style={[
                styles.dayText,
                drivingDays.includes(day) && styles.drivingDay,
              ]}
            >
              {day}
            </Text>
          ))}
        </View>
      </View>
     
    </View>
    <Image source={cuervobus} style={styles.imagenlogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 20,
    marginTop: 16,
    top:100,
    height:300
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
    textTransform: 'uppercase',
  },
  text: {
    flex: 1,
  },
  dayContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  dayText: {
    marginRight: 8,
  },
  drivingDay: {
    fontWeight: 'bold',
    color: '#007aff',
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
    
  },
  imagenlogo: {
    width:80,
    height: 80,
    borderRadius: 50,
    marginRight: 10,
    left:130,
    bottom:-200
  },
  informacion: {
    position: 'absolute',
    right:10,
    padding:15,
    top:180,
    borderRadius: 100,
    backgroundColor: 'black',
    color:'white'
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginVertical: 16,
  
  }

});

export default Carro;