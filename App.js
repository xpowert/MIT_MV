import React, { Component, useState, response } from 'react';
import { Text, View, StyleSheet,FlatList,Button} from 'react-native';
import { Constants } from 'expo-constants';
import { AssetExample } from './components/AssetExample';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import News from './components/news.js';

const Stack = createNativeStackNavigator();


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
        title="Go to news list"
        onPress={() => navigation.navigate('News list')}
      />
       </View>
    </View>
  );
}

function ViewerScreen({ navigation }) {

  return (
    	<View style={styles.container}>
				<News />
			</View>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="News list" component={ViewerScreen} />
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
  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
});