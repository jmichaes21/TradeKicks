import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Backblack } from '../../assets'
import { useNavigation } from '@react-navigation/native'

const ManageAccount = () => {
    // const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Backblack style={styles.back} />
          </TouchableOpacity>
        <Text style={styles.textManage}>Manage Account</Text>
        </View>
    </View>
  )
}

export default ManageAccount;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#3cd3e4'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textManage: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 20,
    },
})