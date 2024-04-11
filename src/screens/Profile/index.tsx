import React, { useEffect, useState, useContext } from 'react';
import {Gap} from '../../components';
import {Card, Avatar} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
import {DummyPhoto} from '../../../src/assets/images/';
import firestore from '@react-native-firebase/firestore';
import { auth } from '../../../config/firebase';
const Profile = () => {
  // const {user}=useContext(auth)
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.Title}>Home</Text> */}
      {/* <View>
        <Text>Welcome {currentUser.uid}</Text>
      </View> */}
      <Gap height={100} />
      <Card containerStyle={styles.card}>
        <View style={styles.column}>
          <Gap height={15} />
          <View style={styles.userInfo}>
            <Avatar
              rounded
              size={120}
              containerStyle={styles.avatar}
              source={DummyPhoto}
            />
            <Gap height={26} />
            <View style={styles.userInfoText}>
              <Text style={styles.teks}>xxxx</Text>
              <Gap height={34} />
              <Text style={styles.teks}>xxxxx@gmail.com</Text>
              <Gap height={34} />
              <Text style={styles.teks}>jln. Universitas Klabat</Text>
              <Gap height={10} />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3CD3E4',
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 8,
    marginTop: 50,
    flexDirection: 'column',
    height:439
  },
  teks: {
    color: '#13274A',
    fontSize: 15,
    fontFamily: 'RobotoSerif',
    fontWeight: '900',
    borderWidth: 1, 
    borderColor: '#13274A', 
    padding: 10,
    borderRadius: 10,
    width: 300
  },
  Title: {
    fontSize: 21,
    color: 'white',
    marginRight: 80,
  },
  userInfo: {
    alignItems: 'center',
  },
  avatar: {
    marginTop: -70,
  },
  userInfoText: {
    marginLeft: 10,
  },
});
