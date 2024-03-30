import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

const MovingCarMap = () => {
  const [location, setLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [isTripStarted, setIsTripStarted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const mapRef = useRef(null);

  const handleStartTrip = useCallback(() => {
    setIsTripStarted(true);
    setStartTime(new Date());
  }, []);

  const handleEndTrip = useCallback(() => {
    setIsTripStarted(false);
    setEndTime(new Date());
  }, []);

  useEffect(() => {
    const fetchVehicleLocation = async () => {
      const response = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (location) => {
          setLocation(location.coords);

          if (isTripStarted) {
            setRouteCoordinates((prevCoordinates) => [...prevCoordinates, location.coords]);
          }
        }
      );

      return () => {
        response.remove();
      };
    };

    if (isTripStarted) {
      fetchVehicleLocation();
    }
  }, [isTripStarted]);

  useEffect(() => {
    if (location && mapRef.current) {
      mapRef.current.animateCamera({
        center: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        pitch: 60,
        heading: location.heading,
        altitude: 200,
        zoom: 16,
        followUserLocation: true,
      });
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={MapView.PROVIDER_DEFAULT}
        showsUserLocation={true}
        followsUserLocation={true}
        initialRegion={{
          latitude: 19.34908657148796,
          longitude: -99.4750113181596,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      > 
        <Marker
          coordinate={location || { latitude: 19.34908657148796, longitude: -99.4750113181596 }}
          title="Coche en movimiento"
          image={isTripStarted ? require('../../assets/camion.png') : null}
        />
        {isTripStarted && routeCoordinates.length > 1 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeWidth={3}
            strokeColor="blue"
          />
        )}
      </MapView>
      {startTime && endTime && (
        <View style={styles.informacion}>
          <Text style={styles.infot}>
            Tiempo de Inicio: {moment(startTime).format('HH:mm:ss')}
          </Text>
          <Text style={styles.infot}>
            Tiempo de Fin: {moment(endTime).format('HH:mm:ss')}
          </Text>
          <Text style={styles.infot}>
            Duración: {moment.utc(moment(endTime).diff(moment(startTime))).format('H[h] mm[m] ss[s]')}
          </Text>
        </View>
      )}

      {!isTripStarted && (
        <View style={styles.menu}> 
        <View style={styles.menuItem}>
         <TouchableOpacity style={styles.Inicio} onPress={handleStartTrip}>
       <Icon name="location-arrow" size={30} color="white" />
</TouchableOpacity>
</View>
        </View>
      )}
      {isTripStarted && (
         <View style={styles.menu}> 
        <View style={styles.menuItem}>
        <TouchableOpacity style={styles.Final} onPress={handleEndTrip}>
  <Icon name="pause" size={30} color="white" />
</TouchableOpacity>
      </View>
        </View>
       
      )}
   
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'flex-end', // Cambia esto
      },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  informacion: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    top:-600,
   

  },
  infot: {
    marginBottom: 5,
},
  menu: {
    bottom:-1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
   

  },
  menuItem: {
    alignItems: 'center',
  },
  Inicio: {
    
    bottom:10,
    padding: 30,
    borderRadius: 100,
    backgroundColor: 'green',
    color:'white'
  },
  Final: {
    position: 'absolute',
    bottom:1,
    padding: 30,
    borderRadius: 100,
    backgroundColor: 'red',
    color:'white'
  },
});

export default MovingCarMap;