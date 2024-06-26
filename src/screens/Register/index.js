/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Logo} from '../../assets';
import {createAccount} from '../../../config/firebase';
import {Gap, TextInput} from '../../components';
import {useNavigation} from '@react-navigation/native';
const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onPressRegister = async () => {
    try {
      await createAccount({email, password, name});
      // Jika pendaftaran berhasil, Anda bisa melakukan navigasi ke layar lain atau menampilkan pesan sukses
      Alert.alert(
        'Registration successful',
        'You have successfully registered.',
      );
    } catch (error) {
      // Jika terjadi kesalahan, tampilkan pesan kesalahan
      Alert.alert('Registration failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top1}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.registrationText}>Registration</Text>
      </View>
      <Gap height={50} />
      <TextInput placeholder="User Name" value={name} onChangeText={setName} />
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Gap height={26} />
      <TouchableOpacity activeOpacity={0.5} onPress={onPressRegister}>
        <View style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Register</Text>
        </View>
      </TouchableOpacity>
      {/* <Button title="Register" onPress={onPressRegister} /> */}
      <Gap height={5.66} />
      <View style={styles.lowerContainer}>
        <Text style={styles.lowerText}>Have an account?</Text>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  buttonContainer: {
    backgroundColor: '#13274A',
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 17,
    paddingVertical: 8,
    marginHorizontal: 45,
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
  },
  lowerContainer: {
    flexDirection: 'row',
    marginHorizontal: 119,
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

export default Register;
