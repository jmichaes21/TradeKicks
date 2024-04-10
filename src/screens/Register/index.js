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

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top1}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.registrationText}>Registration</Text>
      </View>
      <Gap height={20} />
      <TextInput placeholder="Full Name" style={styles.input} />
      <Gap height={12} />
      <TextInput
        placeholder="E-Mail"
        style={styles.input}
        keyboardType="email-address"
      />
      <Gap height={12} />
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        keyboardType="numeric"
      />
      <Gap height={12} />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
      />
      <Gap height={12} />
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry={true}
      />
      <Gap height={40} />
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Register</Text>
        </View>
      </TouchableOpacity>
      <Gap height={4} />
      <View style={styles.lowerContainer}>
        <Text style={styles.lowerText}>Have an account?</Text>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3CD3E4',
    width: '100%',
    height: '100%',
  },
  top1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 99,
    height: 99,
  },
  registrationText: {
    fontSize: 22,
    color: 'white',
  },
  input: {
    height: 41,
    border: 1,
    borderColor: '#020202',
    borderRadius: 10,
    paddingLeft: 10,
    marginHorizontal: 20,
    backgroundColor: '#F7F2F2',
  },
  buttonContainer: {
    width: 320,
    height: 39,
    backgroundColor: '#13274A',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 17,
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
  },
  lowerContainer: {
    flexDirection: 'row',
    marginHorizontal: 105,
    width: 150,
    justifyContent: 'center',
  },
  lowerText: {
    color: 'white',
  },
  signInText: {
    color: '#13274A',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  signInButton: {
    height: 20,
  },
});
