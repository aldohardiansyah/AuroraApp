import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { splash2 } from '../../assets';

const Splash = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('MainApp');
  //   }, 3000);
  // }, [navigation]);

  return (
    <View
      style={{
        backgroundColor: '#8977b5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={splash2} style={styles.logo} />
      <Text style={styles.text}>Write down your precious Idea</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logo: {
    width: 75,
    height: 75,
    marginBottom: 20,
  },
  text: {
    color: 'white',
  },
});
