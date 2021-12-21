import React, { useState } from 'react';
import { Text, View, StyleSheet,FlatList,Button } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const DATA = [
  {
    key: 'John Doe 1',
  },
  {
    key: 'John Doe 2',
  },
  {
    key: 'John Doe 3',
  },
  {
    key: 'John Doe 4',
  },
  {
    key: 'John Doe 5',
  },
];


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

  
  return (
    <View>
     <View style={{padding:5}}>
      <Button
        title="Go to List view"
        onPress={() => navigation.navigate('List view')}
      />
       </View>
       <View style={{padding:5}}>
       <Button
         onPress={() => setCount(count + 1)}
        title="Increase count"
      />
      </View>
      <View style={{padding:5}}>
       <Button
        title="Decrease count"
        onPress={() => setCount(count - 1)}
      />
      </View>
      <View>
          <Text>
            You clicked {count} times
          </Text>
        </View>
    </View>
  );
}

function ViewerScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List view" component={ViewerScreen} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({

  button: {
    width: 200,
    marginTop: 20,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});