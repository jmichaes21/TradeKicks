import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { BackButton, Logo } from '../../../assets/icon';
const index = ({
  label,
  backgroundColor = '#13274A',
  textColor = '#ffff',
  onPress,
  type,
  icon
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-back' && <BackButton />}
        {icon === 'Logo' && <Logo/>}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor)}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};


export default index;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor,
    paddingVertical: 10,
    borderRadius: 20,
    maxWidth: 230,
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
  }),
});
