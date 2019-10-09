import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { SafeAreaView, ScrollView, StyleSheet, Image, AsyncStorage, Alert } from 'react-native';

//import component
import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List() {
  //Array de tecnologias
  const [techs, setTechs] = useState([]);

  //Notificação em tempo real para aprovação/rejeição do booking
  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio('http://192.168.4.118:3333', {
        query: { user_id },
      })

      socket.on('booking_response', booking => {
        Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`);
      })
    })
  }, [])

  //Criar array de tecnologias que foram passadas pelo usuário no login
  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());

      setTechs(techsArray);
    })
  }, []);

  return (
    <SafeAreaView>
      <Image style={styles.logo} source={logo}/>
      
      <ScrollView>
        {techs.map(tech => <SpotList  key={tech} tech={tech}/>)}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 30,
  },

})