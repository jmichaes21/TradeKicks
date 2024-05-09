import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Back } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import { Gap } from '../../components'

const ManageAccount = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back style={styles.back} />
          <Gap height={20} />
          </TouchableOpacity>
        <Text style={styles.textManage}>Manage Account</Text>
        </View>
        <Gap height={20} />
        <View style={styles.content}>
        <Text style={styles.button}>My Profile</Text>
        <TouchableOpacity>
        <View style={styles.buttonContainer}>
            <Text style={styles.textStyle}>Username</Text>
          </View>
           </TouchableOpacity>
           <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.textStyle}>Phone Number</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity> 
          <View style={styles.buttonContainer}>
            <Text style={styles.textStyle}>Email</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity> 
          <View style={styles.buttonContainer}>
            <Text style={styles.textStyle}>Shipping Address</Text>
          </View>
          </TouchableOpacity>
          <Gap height={20} />
          <Text style={styles.button}>Account Security</Text>
          <TouchableOpacity> 
          <View style={styles.buttonContainer}>
            <Text style={styles.textStyle}>Change Password</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity> 
          <View style={styles.buttonContainer}>
            <Text style={styles.textStyle}>Transaction and Payment</Text>
          </View>
          </TouchableOpacity>
           </View>
    </View>
  )
}

export default ManageAccount;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#3cd3e4',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textManage: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 20,
        marginLeft: 30,
        marginTop: 10,
    },
    buttonContainer: {
    width: 375,
    height: 45,
    backgroundColor: '#13274A',
    borderRadius: 10,
    paddingLeft: 15,
    justifyContent: 'center',
    marginVertical: 10,
    },
    textStyle: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
    },
    button: {
      color: 'black',
      fontWeight: 'bold',
      opacity: 0.5,
    },
    content: {
      marginLeft: 18,
    },
    back: {
      marginRight: 12,
      height: 80,
      marginLeft: 30,
      marginTop: 20,
    }
  });