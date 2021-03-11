import React, { useState, useEffect } from 'react';
import {
   StyleSheet,
   View,
   Text,
   TextInput,
   Button,
   ToastAndroid,
} from 'react-native';
import { Picker } from '@react-native-community/picker';

const Select = ({ negeri, selected }) => {
   const handleChange = (value) => {
      //console.log(event.target.value)
      selected(value)
   }

   return (
      <>
         <Picker
            selectedValue={negeri}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) =>
               handleChange(itemValue)
            }>
            <Picker.Item label="Sabah" value="sabah" />
            <Picker.Item label="Johor" value="johor" />
            <Picker.Item label="Selangor" value="selangor" />
            <Picker.Item label="Wilayah Persekutuan" value="wilayah persekutuan" />
            <Picker.Item label="Kedah" value="kedah" />
            <Picker.Item label="Kelantan" value="kelantan" />
            <Picker.Item label="Melaka" value="melaka" />
            <Picker.Item label="Negeri Sembilan" value="negeri sembilan" />
            <Picker.Item label="Pahang" value="pahang" />
            <Picker.Item label="Perlis" value="perlis" />
            <Picker.Item label="Pulau Pinang" value="pulau pinang" />
            <Picker.Item label="Perak" value="perak" />
            <Picker.Item label="Sarawak" value="sarawak" />
            <Picker.Item label="Terengganu" value="terengganu" />
         </Picker>
      </>
   );
};

const styles = StyleSheet.create({

});

export default Select;
