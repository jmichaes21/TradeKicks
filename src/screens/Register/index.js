import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import {Logo} from '../../assets';
import {createAccount} from '../../../config/firebase';
import {Gap} from '../../components';
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
      <Gap height={20} />
      <TextInput
        placeholder="User Name"
        onChangeText={setName}
        value={name}
        style={styles.input}
      />
      <Gap height={12} />
      <TextInput
        placeholder="E-Mail"
        style={styles.input}
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <Gap height={12} />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <Gap height={12} />
      <Gap height={40} />
      <TouchableOpacity activeOpacity={0.5} onPress={onPressRegister}>
        <View style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Register</Text>
        </View>
      </TouchableOpacity>
      {/* <Button title="Register" onPress={onPressRegister} /> */}
      <Gap height={4} />
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
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // input: {
  //   width: '80%',
  //   marginBottom: 10,
  //   padding: 10,
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 5,
  // },
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

export default Register;
