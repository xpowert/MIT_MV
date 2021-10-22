import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';

const HelloWAP = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <AssetExample />
      <Text style={styles.texter2}>
      Hello world from group 07{"\n"}
      Member:<Text style={styles.texter}> Mārcis Veļikanovs</Text>
      </Text>
      <Text style={styles.texter2}>This is my Mārča Veļikanova first React Native application
      </Text>
    </View>
  )
}
export default HelloWAP;


const styles = StyleSheet.create({
  texter: {
    fontWeight: 'bold',
  },
  texter2: {
    margin: 20,
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
});
