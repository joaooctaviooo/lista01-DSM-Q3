import * as React from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import Constants from 'expo-constants';
import {useState} from 'react';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const [msn, setMsn] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is your name?</Text>
      <View style={styles.place}>
        <TextInput onChangeText={msn => setMsn(msn)}/>
      </View>
      
      <View>
        <Text style={styles.text2}>
          Say Hello  {msn}
        </Text>
      </View>
      
      <View>
        <TextInput/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    margin: 4,
    fontWeight: 'bold',
  },
  text2: {
    margin: 4,
    textAlign: 'center',
  },
  place: {
    backgroundColor: '#d9dada',
    borderRadius: 6,
    margin: 4,
    height: 40,
  }
});
