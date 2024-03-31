import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PageHeader, TransactionCard } from '../../components'

const Home = () => {
  return (
    <View style={styles.container}>
      <PageHeader label="Home" backButton={true} type="withPhoto" />
      <ScrollView style={styles.cardcontainder}>
      <TransactionCard  user="Poetri" label="Nike Travis Scott - Used" desc="Want to trade with New Balance, DM me if you are interested"/>
      <TransactionCard  user="Poetri" label="Nike Travis Scott - Used" desc="Want to trade with New Balance, DM me if you are interested"/>
      <TransactionCard  user="Poetri" label="Nike Travis Scott - Used" desc="Want to trade with New Balance, DM me if you are interested"/>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#D9D9D9',
  },
  cardcontainder:{
    marginTop: 30,
  }
})