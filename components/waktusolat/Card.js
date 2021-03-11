import React, { useState, useEffect } from 'react';
import {
   StyleSheet,
   View,
   Text,
   TextInput,
   Button,
   ToastAndroid,
} from 'react-native';

const Card = ({ waktuSolat }) => {
   return (
      <View style={styles.container}>
         {waktuSolat.map(item => {
            const masa = item.time
            const waktu = item.name.charAt(0).toUpperCase() + item.name.slice(1)

            return (
               <Text style={styles.text} key={waktuSolat.indexOf(item) + 1}>
                  {waktu} : {masa}
               </Text>
            )
         })}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      marginTop: 15,
      alignItems: 'center',
      borderColor: 'gray',
      borderWidth: 1,
      paddingTop: 30,
      paddingBottom: 30,
   },
   text: {
      fontSize: 17,
      padding: 6,
   }
});

export default Card;
