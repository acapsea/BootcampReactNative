import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Register from "./Tugas13/Register"
import Component from "./Tugas 12/Component"
import LoginScreen from "./Tugas13/LoginScreen"
import AboutScreen from "./Tugas13/AboutScreen"

export default function App() {
  return (
    // <Component/>
    // <Register/>
    // <LoginScreen/>
    <AboutScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
