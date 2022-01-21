import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList} from 'react-native';
import { Divider, useTheme } from 'react-native-elements';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './pages/homeScreen';

// You can import from local files
import CryptoList from './components/cyproList';

//load coinDetail component
import CryptoDetail from './pages/coinDetail';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { getMarketData } from './components/cryptoApi';

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState([]);
  const [selectedCoinData, setSelectedCoinData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    }
    fetchMarketData();
  }, [])
  

  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.largeTitle}>
           Kriptovalūtu cenas
        </Text>
      <Divider width={1} style={styles.divider} />
      </View>
   <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <CryptoList
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage={item.price_change_percentage_24h}
            logoUrl={item.image}
            onPress={() => navigate(CryptoDetail, {selectedCoinData})}
          />
          
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrap:{
    marginTop:50,
    paddingHorizontal: 15,
  },
  largeTitle:{
    fontSize: 22,
    fontWeight: 'bold',
  },
  divider: {
    marginTop: 10,
  }
});