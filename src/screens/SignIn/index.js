/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';
import Gap from '../../components/atoms/gap';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <TextInput
        placeholder="E-Mail"
        style={styles.input}
        keyboardType="email-address"
      />
      <Gap height={12} />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
      />
      <Gap height={36} />
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Sign In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3CD3E4',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 226,
    height: 162,
  },
  input: {
    width: 320,
    height: 41,
    border: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginHorizontal: 20,
    backgroundColor: '#F7F2F2',
  },
  buttonContainer: {
    width: 280,
    height: 39,
    backgroundColor: '#13274A',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
  },
});
