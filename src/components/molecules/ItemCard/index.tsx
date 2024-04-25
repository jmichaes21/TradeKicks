import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Card} from 'react-native-elements';

const ItemCard = () => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.row} />
    </Card>
  );
};

export default ItemCard;

const styles = StyleSheet.create({});
