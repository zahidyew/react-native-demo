import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  ToastAndroid,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header'

const App = () => {
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
      <Header />
      <View style={styles.container}>
        <Text> {num} </Text>
        <View style={styles.btnContainer}>
          <Button
            title="Counter"
            onPress={clickedBtn}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Get Weather"
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Notepad"
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

export default App;
