import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity  } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Logo, Profile, Home, Category, Chat, Notification, Settings } from '../../assets';

const List = [
  {
    id: '1',
    userName: 'Wilson',
    userImg: require('../../assets/user/ag.jpeg'),
    messageTime: '26 minutes ago',
    messageText: 'Keren bgt woi sepatunya!',
  },
  {
    id: '2',
    userName: 'Juanson',
    userImg: require('../../assets/user/th.jpg'),
    messageTime: '2 hours ago',
    messageText: 'Keren bgt woi sepatunya!',
  },
  {
    id: '3',
    userImg: require('../../assets/user/tm.jpg'),
    messageTime: '3 hours ago',
    userName: 'Jackson',
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
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat', { userName: item.userName })}>
            <View style={styles.userInfo}>
              <View style={styles.userImgWrapper}>
                <Image style={styles.userImg} source={item.userImg} />
              </View>
              <View style={styles.textSection}>
                <View style={styles.userInfoText}>
                  <Text style={styles.postTime}>{item.messageTime}</Text>
                  <Text style={styles.userName}>{item.userName}</Text>
                </View>
                <Text style={styles.chatText}>{item.messageText}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.footer}>
        <TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.Navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
            <View style={styles.footerButton}>
              <Home />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Category')}>
            <View style={styles.footerButton}>
              <Category />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <View style={styles.footerButtonChat}>
              <Chat />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.footerButtonNotification}>
              <Notification />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <View style={styles.footerButtonSettings}>
              <Settings />
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
  card: {
    width: '100%',
    fontSize: 30,
    paddingHorizontal: 176,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: '190%',
  },
  userImg: {
    width: 65,
    height: 70,
    borderRadius: 35,
    marginLeft: 12,
  },
  textSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  userInfoText: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
    textAlign: 'right',
    marginRight: 10,
  },
  chatText: {
    fontSize: 13,
    color: '#333333',
  },
  footer: {
    width: '100%',
    height: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -205,
    marginBottom: 20,
  },
  footerButton: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
  },
  footerButtonChat: {
    width: 30,
    height: 25,
    marginHorizontal: 20,
  },
  footerButtonNotification: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
  },
  footerButtonSettings: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
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