import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {PageHeader, TransactionCard} from '../../components';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
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
import {Gap} from '../../components';
import {Product} from '../../assets/images';

const Homepage = () => {
  const [userData, setuserData] = useState(null);
  const getUserData = async userId => {
    let userData = null;
    await firestore()
      .collection('users')
      .doc(userId)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          userData = documentSnapshot.data();
        }
      });
    return userData;
  };

  useEffect(() => {
    getUserData();
  }, []);

  const navigation = useNavigation();
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const list = [];
        await firestore()
          .collection('posts')
          .get()
          .then(async querySnapshot => {
            // console.log('Total Posts: ', querySnapshot.size);
            for (const doc of querySnapshot.docs) {
              const {post, user, postImg, product: docProduct} = doc.data();
              const userData = await getUserData(user);
              list.push({
                id: doc.id,
                image: postImg,
                owner: userData ? userData.username : 'Unknown',
                message: post,
                product: docProduct,
              });
            }
          });

        setPosts(list);
        if (loading) {
          setLoading(false);
        }

        console.log('Posts:', posts);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.content1}>
      <Image source={{uri: item.image}} style={styles.productImg} />
      <View style={styles.userCaption}>
        <Profile />
        <View style={styles.caption}>
          <Text style={styles.productName}>{item.product}</Text>
          <View style={styles.nameRating}>
            <Text style={styles.owner}>{item.owner}</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.messages}>{item.message}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
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
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Profile style={styles.profile} />
          </TouchableOpacity>
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
          data={posts}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          multiline
          numberOfLines={1}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreatePost')}
            style={styles.createPostButton}>
            <PencilIcon />
          </TouchableOpacity>
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
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
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
    backgroundColor: '#D9D9D9',
  },
  cardcontainder: {
    marginTop: 30,
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
    marginRight: 150,
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
  contentContainer: {
    backgroundColor: 'black',
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
  caption: {
    marginTop: 3,
    marginLeft: 5,
  },
  owner: {
    marginRight: 5,
  },
  messageContainer: {
    marginTop: 5,
    width: 275,
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
    width: 420,
    height: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
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
