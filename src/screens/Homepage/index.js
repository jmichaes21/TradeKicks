/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  Adidas,
  AirJordan,
  Category,
  Chat,
  Home,
  ListSquare,
  Logo,
  Messageicon,
  Nike,
  Notification,
  Profile,
  Puma,
  Search,
  Star,
  Settings,
  Yeezy,
  aJordan,
  PencilIcon,
} from '../../assets';
import Gap from '../../components/atoms/gap';

const dummyData = [
  {
    id: '1',
    image: aJordan,
    owner: "Ta'Litha",
    rating: 4.5,
    message: 'Want to trade with New Balance, DM me if you are interested',
  },
  {
    id: '2',
    image: aJordan,
    owner: "Ta'Litha",
    rating: 4.5,
    message: 'Want to trade with New Balance, DM me if you are interested',
  },
  {
    id: '3',
    image: aJordan,
    owner: "Ta'Litha",
    rating: 4.5,
    message: 'Want to trade with New Balance, DM me if you are interested',
  },
  {
    id: '4',
    image: aJordan,
    owner: "Ta'Litha",
    rating: 4.5,
    message: 'Want to trade with New Balance, DM me if you are interested',
  },
  {
    id: '5',
    image: aJordan,
    owner: "Ta'Litha",
    rating: 4.5,
    message: 'Want to trade with New Balance, DM me if you are interested',
  },
  {
    id: '6',
    image: aJordan,
    owner: "Ta'Litha",
    rating: 4.5,
    message: 'Want to trade with New Balance, DM me if you are interested',
  },
  {
    id: '7',
    image: aJordan,
    owner: "Ta'Litha",
    rating: 4.5,
    message: 'Want to trade with New Balance, DM me if you are interested',
  },
  {
    id: '8',
    image: aJordan,
    owner: "Ta'Litha",
    rating: 4.5,
    message: 'Want to trade with New Balance, DM me if you are interested',
  },
  // Add more dummy data as needed
];

const Homepage = () => {
  const renderItem = ({item}) => (
    <View style={styles.content1}>
      <Image source={item.image} style={styles.productImg} />
      <View style={styles.userCaption}>
        <Profile />
        <View style={styles.caption}>
          <Text style={styles.productName}>Nike Travis Scott - Used</Text>
          <View style={styles.nameRating}>
            <Text style={styles.owner}>{item.owner}</Text>
            <Star style={styles.star} />
            <Text>{item.rating}</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.messages}>{item.message}</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.chatButton}>
              <Messageicon />
              <Text style={styles.chatStyle}>Chat</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <View style={styles.topHeader}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.homeText}>Home</Text>
          <TouchableOpacity>
            <ListSquare style={styles.ListSquare} />
          </TouchableOpacity>
          <Profile style={styles.profile} />
        </View>
        <View style={styles.midHeader}>
          <TouchableOpacity>
            <View style={styles.searchContainer}>
              <Search />
              <Text style={styles.searchText}>Search</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Gap height={12} />
        <View style={styles.botHeader}>
          <TouchableOpacity>
            <View style={styles.brandContainer}>
              <Nike />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.brandContainer}>
              <AirJordan />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.brandContainerPuma}>
              <Puma />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.brandContainer}>
              <Adidas />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.brandContainer}>
              <Yeezy />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <View style={styles.createPostButton}>
            <PencilIcon />
          </View>
        </TouchableOpacity>
        <View style={styles.Navigation}>
          <TouchableOpacity>
            <View style={styles.footerButtton}>
              <Home />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.footerButtton}>
              <Category />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.footerButttonChat}>
              <Chat />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.footerButttonNotification}>
              <Notification />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.footerButttonSettings}>
              <Settings />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DBD8D8',
  },
  pageHeader: {
    zIndex: 2,
    backgroundColor: '#3CD3E4',
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 99,
    height: 99,
  },
  homeText: {
    fontSize: 21,
    color: 'white',
    marginRight: 80,
  },
  ListSquare: {
    marginRight: 14,
  },
  profile: {
    marginTop: 5,
  },
  midHeader: {
    alignItems: 'center',
    marginTop: -12,
  },
  searchContainer: {
    marginTop: -5,
    alignItems: 'center',
    flexDirection: 'row',
    width: 330,
    height: 39,
    backgroundColor: 'white',
    borderRadius: 100,
    paddingLeft: 20,
    elevation: 10,
  },
  searchText: {
    fontSize: 13,
    marginLeft: 10,
  },
  botHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 50,
    height: 48,
    borderRadius: 10,
    marginHorizontal: 8,
    marginBottom: -20,
    elevation: 10,
  },
  brandContainerPuma: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 53,
    height: 48,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: -20,
    elevation: 5,
  },
  content: {
    backgroundColor: '#DBD8D8',
    paddingVertical: 20,
  },
  content1: {
    width: 330,
    height: 330,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    elevation: 5,
  },
  productImg: {
    width: 310,
    height: 200,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  productName: {
    fontSize: 20,
    color: '#13274A',
  },
  userCaption: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 12,
  },
  nameRating: {
    flexDirection: 'row',
  },
  caption: {
    marginTop: 3,
    marginLeft: 5,
  },
  owner: {
    marginRight: 5,
  },
  star: {
    marginTop: 2,
    marginRight: 4,
  },
  messageContainer: {
    marginTop: 5,
    width: 175,
  },
  messages: {
    fontSize: 12,
  },
  chatButton: {
    borderRadius: 15,
    flexDirection: 'row',
    width: 86,
    height: 22,
    backgroundColor: '#13274A',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 150,
  },
  chatStyle: {
    color: 'white',
    marginLeft: 5,
  },
  footer: {
    width: 360,
    height: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -205,
  },
  footerButtton: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
  },
  footerButttonChat: {
    width: 30,
    height: 25,
    marginHorizontal: 20,
  },
  footerButttonNotification: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
  },
  footerButttonSettings: {
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
  createPostButton: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#13274A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
    marginLeft: 250,
  },
});
