import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'


const CryptoList = ({ name, symbol, currentPrice, priceChangePercentage, logoUrl, onPress}) => {
  // if price bigger than zero return green else red
  const priceChangeColor = priceChangePercentage > 0 ? 'green'  : 'red';
  return (
    <TouchableOpacity>
    <View style={styles.itemWrapper}>

      {/*Left side view*/}
      <View style={styles.leftWrap}>
      <Image source={{uri: logoUrl}} style={styles.image}/>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{ name }</Text>
        <Text style={styles.subtitle}>{ symbol.toUpperCase() }</Text>
      </View>
      </View>
       {/*Right side view*/}
      <View style={styles.rightWrap}>
        <Text style={styles.title}>€{currentPrice.toLocaleString('de-DE', {currency: 'Eur'})}</Text>
        <Text style={[styles.subtitle,{color: priceChangeColor} ]}>{priceChangePercentage.toFixed(2)}%</Text>
      </View>

    </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 10,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  leftWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightWrap: {
    alignItems: 'flex-end'
  },
  titleWrapper: {
    marginLeft: 8,

  },
  title: {
    fontSize: 18,

  },
  subtitle: {
    fontSize: 14,
    color: '#A9A881',
  },
  image: {
    height: 48,
    width: 48,
  },

})

export default CryptoList