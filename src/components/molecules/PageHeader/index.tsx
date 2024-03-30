import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../..';
import {DummyPhoto} from '../../../assets/images';
import {SearchBar} from '@rneui/themed';

const PageHeader = ({label, backButton, onPress, type}) => {
  if (type === 'withPhoto') {
    return (
      <View style={styles.containerWithPhoto}>
        <View style={styles.leftContent}>
          <Text style={styles.label}>Home</Text>
          <Image style={styles.face} source={DummyPhoto} />
        </View>
        <SearchBar
          platform="android"
          placeholder="Search..."
          onChangeText={newVal => setValue(newVal)}
          placeholderTextColor="#888"
          inputContainerStyle={styles.searchContainer}
          containerStyle={styles.searchBarContainer}
          inputStyle={styles.searchInput}
          leftIconContainerStyle={styles.searchIcon}
          leftIcon={{
            type: 'font-awesome',
            name: 'search',
            color: '#86939e',
          }}
        />
        <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleIconPress(1)}>
          <Text>Icon 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleIconPress(2)}>
          <Text>Icon 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleIconPress(3)}>
          <Text>Icon 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleIconPress(4)}>
          <Text>Icon 4</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} />
      )}
      <Text style={[styles.label, backButton && styles.labelWithBackButton]}>
        {label}
      </Text>
    </View>
  );
};
export default PageHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3CD3E4',
    paddingLeft: 24,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerWithPhoto: {
    backgroundColor: '#3CD3E4',
    paddingHorizontal: 24,
    paddingVertical: 22,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Roboto-serif',
    fontSize: 22,
    color: '#ffff',
    fontWeight: '900',
    margin: 10,
  },
  labelWithBackButton: {
    marginLeft: 26,
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  appSubTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  face: {
    width: 55,
    height: 55,
    borderRadius: 8,
    marginLeft: 230,
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderRadius: 20,
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingHorizontal: 0,
  },
  searchInput: {
    color: '#000',
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 20,
  },
  iconButton: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
