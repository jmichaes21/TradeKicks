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
import {Footer, Gap} from '../../components';

const Category = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.textCategory}>Category</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Profile style={styles.profile} />
        </TouchableOpacity>
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
      <Footer showCreatePostButton={false} marginTop={213} />
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
    marginLeft: 126,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 44,
    marginBottom: -44,
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
