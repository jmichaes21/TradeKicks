/* eslint-disable prettier/prettier */
import {Open, TradeDetails, SignInRegister,Homepage, Settings, Category, Profile, Chat, Login, Register, CreatePost, ListChat, ManageAccount, Notification} from '../screens';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Open"
        component={Open}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInRegister"
        component={SignInRegister}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TradeDetails"
        component={TradeDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListChat"
        component={ListChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ManageAccount"
        component={ManageAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
