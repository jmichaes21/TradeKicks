/* eslint-disable prettier/prettier */
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Logo, Line} from '../../assets';

const SignInRegister = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Login</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.containerForLine}>
        <Line style={styles.line1} />
        <Text style={styles.textOr}>Or</Text>
        <Line style={styles.line2} />
      </View>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Register</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignInRegister;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3CD3E4',
    alignItems: 'center',
    justifyContent: 'center', // Center the content vertically
    width: '100%', // Set width and height to 100% to make it full screen
    height: '100%',
  },
  logo: {
    width: 331,
    height: 215,
  },
  buttonContainer: {
    width: 280,
    height: 47,
    backgroundColor: '#13274A',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
  },
  containerForLine: {
    marginLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textOr: {
    marginHorizontal: 6,
    color: 'white',
    marginVertical: 8,
  },
  line1: {
    marginLeft: -12,
  },
});
