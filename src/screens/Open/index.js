/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const Open = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('SignInRegister');
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  });
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.tagline}>Kick It Up, Trade It On</Text>
    </View>
  );
};

export default Open;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3CD3E4',
    alignItems: 'center',
    justifyContent: 'center', // Center the content vertically
    width: '100%', // Set width and height to 100% to make it full screen
    height: '100%',
  },
  logo: {
    width: 290,
    height: 197,
  },
  tagline: {
    fontSize: 13,
    color: '#13274A',
    marginTop: -40,
  },
});
