/* eslint-disable prettier/prettier */
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Category,
  Chat,
  Home,
  Notification,
  Settings,
  PencilIcon,
} from '../../../assets';

const Footer = ({showCreatePostButton, marginTop, marginBottom}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.footer, {marginTop, marginBottom}]}>
      {showCreatePostButton && (
        <TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreatePost')}
            style={styles.createPostButton}>
            <PencilIcon />
          </TouchableOpacity>
        </TouchableOpacity>
      )}
      <View style={styles.Navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <View style={styles.footerButtton}>
            <Home />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Category')}>
          <View style={styles.footerButtton}>
            <Category />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ListChat')}>
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
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -205,
    marginBottom: 20,
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
  createPostButton: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#13274A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
    marginLeft: 250,
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
