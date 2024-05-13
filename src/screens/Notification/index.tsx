import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Category, Chat, Notification as Notif, Settings } from '../../assets/icons';
import { checked, price, Group } from '../../assets/icons'
import { Gap } from '../../components';
import { Logo } from '../../assets';

const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.notificationContainer}>
      <View style={styles.header}> 
      <Image source={Logo} style={styles.logo} />
        <Text style={styles.headerText}>Notification</Text>
        <Gap height={50} />
      </View>
        <View style={styles.notificationItem}>
        <Image source={checked} style={styles.checkIcon} /> 
          <View style={styles.notificationDetails}>
            <Text style={styles.notificationTitle}>Barter notification accepted! Check here for details.</Text>
            <Text style={styles.notificationTime}>1 minute ago</Text>
          </View>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>View Order</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.notificationItem}>
        <Image source={price} style={styles.checkIcon} />
          <View style={styles.notificationDetails}>
            <Text style={styles.notificationTitle}>New offer for you! You have a new offer for Nike Travis Scott shoes.</Text>
            <Text style={styles.notificationTime}>15 minutes ago</Text>
          </View>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>View Order</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.notificationItem}>
        <Image source={Group} style={styles.checkIcon} />
          <View style={styles.notificationDetails}>
            <Text style={styles.notificationTitle}>Transaction successful! Check here for details.</Text>
            <Text style={styles.notificationTime}>1 hour ago</Text>
          </View>
        </View>
      </View>
    
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3CD3E4',
  },
  notificationContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection:"row"
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    marginTop: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
 checkIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 16,
  },
  notificationDetails: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#13274A',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 14,
    color: '#13274A',
  },
  actionButton: {
    backgroundColor: '#13274A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  addText: {
    fontSize: 14,
  },
  logo: {
    width: 110,
    height: 80,

  },
});