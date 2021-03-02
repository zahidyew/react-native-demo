import React, { useState, useEffect } from 'react';
import {
   StyleSheet,
   View,
   Text,
   TextInput,
   Button,
   ToastAndroid,
} from 'react-native';

const WeatherScreen = () => {
   const defaultKey = "ff9f895b2e884d6680530135202710"
   const [country, setCountry] = useState('Malaysia');
   const [submitted, setSubmitted] = useState(false)
   const [temperature, setTemperature] = useState('');

   useEffect(() => {
      const fetchData = async () => {
         try {
            const url = `http://api.weatherapi.com/v1/current.json?key=${defaultKey}&q=${country}`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data.current.temp_c)
            setTemperature(data.current.temp_c)
            ToastAndroid.show(
               `Temperature is: ${data.current.temp_c}°C`,
               ToastAndroid.SHORT
            )
         } catch(err) {
            console.error(err);
         }
      }
      if (submitted) { fetchData(); setSubmitted(false);}
   }, [submitted])

   const handleSubmit = () => {
      if (country === "") {
         //todo add a snackbar here 
      }
      else {
         // set submitted value to true, then send request to API
         setSubmitted(true)
      }
   }

   const showTemp = () => {
      if (temperature === '') {
         return  `Show me the Weather`
      } else {
         return `Temperature in ${country} is ${temperature}°C`
      }
   }

   return (
      <View style={styles.container}>
         <Text style={styles.text}> {showTemp()} </Text>
         {/* <View style={styles.textInputs}>
            <TextInput
               value={defaultKey}
               editable={false}
            />
         </View> */}
         <View style={styles.textInputs}>
            <TextInput
               value={country}
               onChangeText={text => setCountry(text)}
            />
         </View>
         <View style={styles.btn}>
            <Button 
               title="Submit"
               onPress={handleSubmit}
               /* onPress={() => console.log(country)} */
            />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingTop: 150,
   },
   textInputs: {
      height: 50, 
      borderColor: 'gray', 
      borderWidth: 1, 
   },
   btn: {
      marginTop: 10,
   },
   text: {
      textAlign: 'center',
      fontSize: 20,
      paddingBottom: 30,
   }
});

export default WeatherScreen;
