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

const SelectZon = ({ zon, userZon, selected }) => {
   const handleChange = (value) => {
      //console.log(event.target.value)
      selected(value)
   }

   return (
      <>
         <Picker
            selectedValue={userZon}
            style={{ height: 50, width: 230 }}
            onValueChange={(itemValue, itemIndex) =>
               handleChange(itemValue)
            }>
               {zon.map(item => {
                  return (
                     <Picker.Item key={zon.indexOf(item)} label={item} value={item} />
                  )
               })}
         </Picker>
      </>
   );
};

const styles = StyleSheet.create({

});

export default SelectZon;
