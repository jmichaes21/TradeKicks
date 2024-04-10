/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Back, SetIcon, SwapIcons, UpIcon, aJordan} from '../../assets';

const TradeDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity>
          <Back />
        </TouchableOpacity>
        <Text style={styles.headerTextStyle}>Trade</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.productPreview}>
          <View style={styles.product}>
            <Text style={styles.ownerTitle}>Your Product</Text>
            <Image source={aJordan} style={styles.productImage} />
            <Text style={styles.productName}>Nike Travis Scott</Text>
            <Text style={styles.productCondition}>Used</Text>
          </View>
          <SwapIcons />
          <View style={styles.product}>
            <Text style={styles.targetTitle}>Target Product</Text>
            <Image source={aJordan} style={styles.productImage} />
            <Text style={styles.productName}>Nike Travis Scott</Text>
            <Text style={styles.productCondition}>New</Text>
          </View>
        </View>
        <View style={styles.information}>
          <Text style={styles.informationTitle}>Shipping and Payment</Text>
          <View style={styles.informationDetails1}>
            <Text style={styles.informationText1}>
              Address: jln.universitasklabat
            </Text>
            <TouchableOpacity>
              <SetIcon />
            </TouchableOpacity>
          </View>

          <View style={styles.informationDetails2}>
            <Text style={styles.informationText2}>Shipping: J&T</Text>
            <TouchableOpacity>
              <SetIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.informationDetails3}>
            <Text style={styles.informationText3}>BNI Virtual Account</Text>
            <TouchableOpacity>
              <SetIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Footer}>
          <View style={styles.extraContainer}>
            <Text style={styles.extraText}>Extras</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.extraPrice}>Rp142.000</Text>
              <TouchableOpacity>
                <UpIcon />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.tradeButton}>
              <Text style={styles.tradeText}>Trade</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TradeDetails;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#13274A',
  },
  Header: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    marginLeft: 17,
  },
  headerTextStyle: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 17,
  },
  productPreview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: 25,
  },
  product: {
    width: 152,
    height: 205,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 82,
    height: 82,
    borderRadius: 15,
  },
  ownerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    marginRight: 35,
    marginBottom: 20,
  },
  targetTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    marginRight: 25,
    marginBottom: 20,
  },
  productName: {
    marginTop: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  productCondition: {
    marginTop: 3,
  },
  information: {
    marginTop: 42,
    width: 330,
    height: 230,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  informationTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  informationText1: {
    fontSize: 14,
    fontWeight: 'medium',
    color: 'black',
    marginRight: 100,
  },
  informationText2: {
    fontSize: 14,
    fontWeight: 'medium',
    color: 'black',
    marginRight: 192,
  },
  informationText3: {
    fontSize: 14,
    fontWeight: 'medium',
    color: 'black',
    marginRight: 154,
  },
  informationDetails1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  informationDetails2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  informationDetails3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 70,
  },
  Footer: {
    marginTop: 50,
    flexDirection: 'row',
    width: '100%',
    height: 100,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
  },
  extraContainer: {
    marginLeft: 39,
    marginRight: 50,
  },
  extraText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  extraPrice: {
    color: 'black',
  },
  tradeButton: {
    width: 154,
    height: 44,
    backgroundColor: '#13274A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  tradeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
