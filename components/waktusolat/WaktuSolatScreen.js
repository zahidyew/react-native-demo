import React, { useState, useEffect } from 'react';
import {
   StyleSheet,
   View,
   Text,
   TextInput,
   Button,
   ToastAndroid,
} from 'react-native';
import Select from './Select';
import SelectZon from './SelectZon';
import Card from './Card';

const WaktuSolatScreen = () => {
   const [negeri, setNegeri] = useState('sabah')
   const [zon, setZon] = useState([])
   const [userZon, setUserZon] = useState('kota kinabalu')
   const [waktuSolat, setWaktuSolat] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         const url = 'https://waktu-solat-api.herokuapp.com/api/v1/states.json?negeri=' + negeri
         const res = await fetch(url)
         const data = await res.json()
         setZon(data.data.negeri.zon)
         setUserZon(data.data.negeri.zon[0])
      }
      fetchData()
   }, [negeri])

   // fetch waktu solat for a specific zon
   useEffect(() => {
      const fetchData = async () => {
         const url = 'https://waktu-solat-api.herokuapp.com/api/v1/prayer_times.json?zon=' + userZon
         const res = await fetch(url)
         const data = await res.json()

         setWaktuSolat(data.data[0].waktu_solat)
      }
      fetchData()
   }, [userZon])

   const selectedValue = (value) => {
      setNegeri(value)
   }

   const selectedZon = (zon) => {
      setUserZon(zon)
   }

   return (
      <View style={styles.container}>
         <Text style={styles.title}> Waktu Solat </Text>
         <View>
            <Select negeri={negeri} selected={selectedValue} />
            <SelectZon zon={zon} userZon={userZon} selected={selectedZon} />
            <Text style={styles.subtitle}> Waktu solat {userZon} </Text>
            <Card waktuSolat={waktuSolat} />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   title: {
      fontSize: 22,
   },
   subtitle: {
      fontSize: 17,
      fontWeight: 'bold',
   }
});

export default WaktuSolatScreen;
