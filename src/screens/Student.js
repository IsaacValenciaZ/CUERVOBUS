import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { errormessage, formgroup, head1, head2, input, label, link, link2 } from '../common/formcss'
import { button1, button2 } from '../common/button'
const StudentCard = ({ navigation }) => {
  const student = {
    name: 'Rafael Isaac Valencia Zeoeda',
    group: 'DSM-52',
    semester: '5',
    qrData: 'https://www.universidad.edu.mx/estudiante/RafaelIsaac',
  };

  return (
    <View style={styles.card}>
      <Text style={styles.text}>Nombre: {student.name}</Text>
      <Text style={styles.text}>Grupo: {student.group}</Text>
      <Text style={styles.text}>Cuatrimestre: {student.semester}</Text>
      <QRCode value={student.qrData} size={150} />



      <Text style={button2}onPress={() => navigation.navigate('maps')}> Regresar</Text>
    </View>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  card: {
    top:200,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
    
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    
  },

});
