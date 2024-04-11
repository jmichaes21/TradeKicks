/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  ADIDAScategory,
  AIRJORDANcategory,
  CONVERSEcategory,
  Chat,
  Home,
  Logo,
  NBcategory,
  NIKEcategory,
  Notification,
  Profile,
  Settings,
  YEEZYcategory,
  Category as Categoryicon,
} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.textCategory}>Category</Text>
        <Profile style={styles.profile} />
      </View>
      <View style={styles.content}>
        <View style={styles.line}>
          <TouchableOpacity>
            <View style={styles.Box}>
              <NIKEcategory />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Box}>
              <AIRJORDANcategory />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line}>
          <TouchableOpacity>
            <View style={styles.Box}>
              <YEEZYcategory />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Box}>
              <ADIDAScategory />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line}>
          <TouchableOpacity>
            <View style={styles.Box}>
              <NBcategory />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Box}>
              <CONVERSEcategory />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.Navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
            <View style={styles.footerButtton}>
              <Home />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
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
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <View style={styles.footerButttonSettings}>
              <Settings />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Category;

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
  textCategory: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 20,
  },
  profile: {
    marginLeft: 70,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box: {
    width: 120,
    height: 120,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flexDirection: 'row',
    margin: 20,
  },
  footer: {
    width: '100%',
    height: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 109,
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
});
