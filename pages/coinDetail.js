import React from 'react';
import { Text, View } from 'react-native';

  const CryptoDetail = (item) => {
    setSelectedCoinData(item);

     return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.largeTitle}>
           item.name
        </Text>
      <Divider width={1} style={styles.divider} />
      </View>
    </View>
  );
}
export default CryptoDetail;