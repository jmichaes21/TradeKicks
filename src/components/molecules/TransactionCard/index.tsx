import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { Card, Avatar } from 'react-native-elements';
import { Button, Gap } from '../..';
import { Product } from '../../../assets/images';
const TransactionCard = ({date,label,user,price, desc}) => {
  return (
    <Card containerStyle={styles.card}>
        <View style={styles.column}>
        <Image
          style={{ width: 345, height: 200, borderRadius: 5 }}
          source={Product}
        />
        <Gap height={15} />
          <Avatar
            size={32}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
          <Gap height={10} />
          <Card.Title style={styles.label}>{label}</Card.Title>
          <Text style={styles.desc}>{desc}</Text>
          <Gap height={18} />
          <Button label="Chat"/>
      </View>
    </Card>
  );
}

export default TransactionCard

const styles = StyleSheet.create({
  card:{
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 8,
  },
  label:{
    color: "#13274A",
    fontSize:19,
    fontFamily: "RobotoSerif",
    fontWeight: "900",
    textAlign: 'left',
    marginLeft: 5,
  },
  desc:{
    color: "#13274A",
    marginLeft: 20,
  },
  username:{
    color: "#13274A",
    fontSize:12,
  }
})