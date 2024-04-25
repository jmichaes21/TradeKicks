import {StyleSheet, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <View>
      <Input
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Roboto-Regular',
    height: 41,
    borderColor: '#020202',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 13,
    marginHorizontal: 23,
    backgroundColor: '#F7F2F2',
  },
});
