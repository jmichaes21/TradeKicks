import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Card, Avatar} from 'react-native-elements';
import {Button, Gap} from '../..';
import {Product} from '../../../assets/images';
const TransactionCard = ({ date, label, user, price, desc }) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.column}>
        <Image
          style={{ width: 345, height: 200, borderRadius: 5 }}
          source={Product}
        />
        <Gap height={15} />
        <View style={styles.userInfo}>
          <Avatar
            rounded
            size="medium"
            containerStyle={styles.avatar}
            source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
          />
          <View style={styles.userInfoText}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.username}>{user}</Text>
            <Text style={styles.desc}numberOfLines={2} >{desc}</Text>
            <Gap height={10}/>
            <Button label="Chat"/>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 8,
    // marginTop: 50,
  },
  label: {
    color: '#13274A',
    fontSize: 19,
    fontFamily: 'RobotoSerif',
    fontWeight: '900',
  },
  desc: {
    color: '#13274A',
    flex:1,
    marginRight:60
  },
  username: {
    color: '#13274A',
    fontSize: 12,
    marginTop: 5,
    fontWeight:"500"
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 10,
  },
  userInfoText: {
    marginLeft: 10,
  },
});
