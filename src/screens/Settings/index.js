/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  Chat,
  Home,
  Logo,
  Notification,
  Profile,
  Settings,
  Category as Categoryicon,
} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const Settingscreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.textSettings}>Settings</Text>
        <Profile style={styles.profile} />
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('ManageAccount')}>
          <View style={styles.buttonContainer}>
            <Text style={styles.textStyle}>Manage Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.textStyle}>User Guide</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.textStyle}>Terms and Policies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.textStyle}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.Navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
            <View style={styles.footerButtton}>
              <Home />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Category')}>
            <View style={styles.footerButtton}>
              <Categoryicon />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <View style={styles.footerButttonChat}>
              <Chat />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.footerButttonNotification}>
              <Notification />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.footerButttonSettings}>
              <Settings />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settingscreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3CD3E4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 99,
    width: 99,
  },
  textSettings: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 20,
  },
  profile: {
    marginLeft: 80,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 370,
    height: 47,
    backgroundColor: '#13274A',
    borderRadius: 10,
    paddingLeft: 16,
    justifyContent: 'center',
    marginVertical: 10,
  },
  footer: {
    width: '100%',
    height: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '105%',
  },
  footerButtton: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
  },
  footerButttonChat: {
    width: 30,
    height: 25,
    marginHorizontal: 20,
  },
  footerButttonNotification: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
  },
  footerButttonSettings: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
  },
  Navigation: {
    flexDirection: 'row',
    width: 360,
    height: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});
