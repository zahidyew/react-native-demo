import React, { useState } from 'react';
import {
   StyleSheet,
   View,
   Text,
   Button,
   ToastAndroid,
} from 'react-native';

//import Header from './Header'

const HomeScreen = ({navigation}) => {
   const [num, setNum] = useState(0);

   const clickedBtn = () => {
      setNum(num + 1);
      ToastAndroid.show(
         `Clicked ${num + 1} of times.`,
         ToastAndroid.SHORT
      )
   }

   return (
    <>
      {/* <Header /> */}
      <View style={styles.container}>
        {/* <Text> {num} </Text>
        <View style={styles.btnContainer}>
          <Button
            title="Counter"
            onPress={clickedBtn}
          />
        </View> */}
        <View style={styles.btnContainer}>
          <Button
            title="Get Weather"
            onPress={() => navigation.navigate('Weather')}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Waktu Solat"
            onPress={() => navigation.navigate('WaktuSolat')}
          />
        </View>
      </View>
    </>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   btnContainer: {
      padding: 8,
   }
});

export default HomeScreen;
