import React, {useState, useEffect, useCallback} from 'react';
import {View, TouchableOpacity,ScrollView, Text, Button, StyleSheet, Image} from 'react-native';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {
  Profile,
  ListSquare,
  Backblack,
  Trade
} from '../../assets';

const ChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Backblack style={styles.back} />
        </TouchableOpacity>
          <Profile style={styles.profile} />
          <Text style={styles.Name}>User</Text>
          <TouchableOpacity onPress={() => navigation.navigate('TradeDetails')}>
          <Trade style={styles.trade}/>
          </TouchableOpacity>
      </View>
    <GiftedChat
  messages={messages}
  onSend={(messages) => onSend(messages)}
  user={{
    _id: 1,
  }}
  alwaysShowSend
  scrollToBottom
  renderBubble={(props) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: 'black', 
          },
          left: {
            color: 'black', 
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: '#D9D9D9', 
          },
          right: {
            backgroundColor: '#D9D9D9', 
          },
        }}
      />
    );
  }}
/>

    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#294677'
  },
  topHeader: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    alignItems: 'center'
  },
  back: {
    width: 99,
    height: 99,
    marginLeft: 10,
    marginRight: 10,
  },
  trade: {
    width: 99,
    height: 99,
  },
  Name: {
    fontSize: 21,
    color: 'black',
    marginRight: 190,
    marginLeft:20,
  },
  profile: {
    marginTop: 5,
  },
});
