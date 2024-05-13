/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {app} from '../../../config/firebase';
import {Gap} from '../../components';
import {Logo} from '../../assets';
const auth = getAuth(app);
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPressLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      navigation.navigate('Homepage')
      console.log('Logged in user:', user);
    } catch (error) {
      console.log(error);
      Alert.alert('Login failure', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Gap height={12} />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Gap height={36} />
      <TouchableOpacity activeOpacity={0.5} onPress={onPressLogin}>
        <View style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Styles
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

export default SignIn;
