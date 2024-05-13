/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  ScrollView,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Back} from '../../assets';
import {Card} from 'react-native-elements';
import {launchImageLibrary} from 'react-native-image-picker';
import firebase from '../../../config/firebase';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
//   import {
//     Back,
//     Messageicon,
//     Profile,
//     Star,
//     UploadPictures,
//     aJordan,
//   } from '../../assets';
import {Product} from '../../assets/images';
import {auth} from '../../../config/firebase';
import {Gap, TextInput} from '../../components';
import {useNavigation} from '@react-navigation/native';

const CreatePost = () => {
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState(null);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [product, setProduct] = useState(null);
  const [post, setPost] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const choosePhotoFromLibrary = () => {
    const options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      console.log('launchImageLibrary response:', response);
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0]);
      } else {
        console.log('No image selected');
      }
    });
  };

  const uploadImage = async () => {
    console.log('image value:', image);
    if (image && image.uri) {
      const uri = image.uri;
      let filename = uri.substring(uri.lastIndexOf('/') + 1);
      const extension = filename.split('.').pop();
      const name = filename.split('.').slice(0, -1).join('.');
      filename = name + Date.now() + '.' + extension;

      setUploading(true);
      setTransferred(0);

      const storageRef = storage().ref(`photos/${filename}`);
      const task = storageRef.putFile(uri);

      task.on('state_changed', taskSnapshot => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
        setTransferred(
          Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
            10000,
        );
      });

      try {
        await task;
        const imageUrl = await storageRef.getDownloadURL(); // Simpan URL gambar ke dalam variabel imageUrl
        setUploading(false);
        Alert.alert('Photo uploaded!', 'Your post has been publish!');
        return imageUrl; // Kembalikan imageUrl dari fungsi uploadImage
      } catch (e) {
        console.error(e);
        return null;
      }
    } else {
      console.log('No image or image URI selected');
      return null;
    }
  };

  const submitPost = async () => {
    const imageUrl = await uploadImage();
    console.log('Image Url: ', imageUrl);
    console.log('Post: ', post);
    console.log('Product: ', product);
    if (currentUser) {
      firestore()
        .collection('posts')
        .add({
          userId: currentUser.uid,
          post: post,
          postImg: imageUrl,
          product: product,
          postTime: firestore.Timestamp.fromDate(new Date()),
        })
        .then(() => {
          console.log('post added');
          setPost(null);
          setProduct(null);
        })
        .catch(error => {
          console.log('something went wrong when added post.', error);
        });
    } else {
      console.log('User is not authenticated');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Create Post</Text>
      </View>

      <ScrollView contentContainerStyle={styles.detailPostwrap}>
        <View style={styles.detailPost}>
          <Text style={styles.postCaptionTitle}>Product Name</Text>
          <Gap height={12} />
          <TextInput
            placeholder="Enter your product"
            value={product}
            onChangeText={content => setProduct(content)}
            style={styles.productInput}
            width={308}
          />
          <Gap height={12} />
          <Text style={styles.postCaptionTitle}>Post Caption</Text>
          <TextInput
            placeholder="Enter your post caption"
            multiline
            numberOfLines={4}
            value={post}
            onChangeText={content => setPost(content)}
            style={styles.captionInput}
            width={308}
          />
          <TouchableOpacity
            style={styles.uploadPicturesTitle}
            onPress={choosePhotoFromLibrary}>
            <Text>Upload Pictures</Text>
          </TouchableOpacity>

          {image && image.uri ? (
            <Image style={styles.addimage} source={{uri: image.uri}} />
          ) : null}
          <Gap height={20} />
          <TouchableOpacity onPress={submitPost}>
            <View style={styles.postButton}>
              <Text style={styles.postButtonText}>Post !</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  back: {
    width: 99,
    height: 99,
    marginLeft: 10,
    marginRight: 10,
  },
  header: {
    width: '100%',
    height: 97,
    flexDirection: 'row',
    backgroundColor: '#3CD3E4',
    alignItems: 'center',
    paddingLeft: 25,
  },
  headerText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  title: {
    fontSize: 21,
    color: 'white',
    marginRight: 190,
    marginLeft: 20,
  },
  detailPostwrap: {
    flexGrow: 1,
  },
  productInput: {
    width: 300,
    height: 41,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    borderRadius: 10,
    paddingLeft: 10,
    marginHorizontal: 20,
    backgroundColor: '#F7F2F2',
  },
  detailPost: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#13274A',
  },
  addimage: {
    width: '100%',
    height: 250,
  },
  postCaptionTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  captionInput: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    textAlign: 'center',
    width: 90,
    marginBottom: 15,
    color: 'white',
  },
  uploadPicturesTitle: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  postButton: {
    width: 308,
    height: 37,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  postButtonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
