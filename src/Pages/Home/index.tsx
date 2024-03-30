import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PageHeader, TransactionCard } from '../../components'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader label="Home" backButton={true} type="withPhoto" />
      <TransactionCard  label="Nike Travis Scott - Used" desc="Want to trade with New Balance, DM me if you are interested"/>
      <TransactionCard  label="Nike Travis Scott - Used" desc="Want to trade with New Balance, DM me if you are interested"/>
      <TransactionCard  label="Nike Travis Scott - Used" desc="Want to trade with New Balance, DM me if you are interested"/>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#D9D9D9',
  }
})