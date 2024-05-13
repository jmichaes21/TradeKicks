import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Logo, Profile } from '../../assets';

const List = [
  {
    id: '1',
    userName: 'Wilson',
    userImg: Profile, // Menggunakan asset 'Profile' sebagai contoh
    messageTime: '26 minutes ago',
    messageText: 'Keren bgt woi sepatunya!',
  },
  {
    id: '2',
    userName: 'Juanson',
    userImg: Profile, // Menggunakan asset 'Profile' sebagai contoh
    messageTime: '2 hours ago',
    messageText: 'Keren bgt woi sepatunya!',
  },
  {
    id: '3',
    userName: 'Jackson',
    userImg: Profile, // Menggunakan asset 'Profile' sebagai contoh
    messageTime: '3 hours ago',
    messageText: 'Keren bgt woi sepatunya!',
  },
];

const ListChat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.textListChat}>ListChat</Text>
        <Image source={Profile} style={styles.profile} />
      </View>
      <FlatList
        data={List}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            {/* <Image source={item.userImg} />  */}
            <Text>{item.userName}</Text>
            <Text>{item.messageTime}</Text>
            <Text>{item.messageText}</Text>
          </View>
        )}
      />
      
    </View>
  );
};

export default ListChat;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3CD3E4',
  },
  logo: {
    height: 99,
    width: 99,
  },
  textListChat: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 20,
  },
  profile: {
    height: 50,
    width: 50,
  },
});