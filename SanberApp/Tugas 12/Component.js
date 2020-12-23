import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class App extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <View style={styles.navBar}>
          <Image source={require("./Images/logo.png")}style={{width: 98, height: 22}} /> 
          <View style={styles.rightNavbar}>
            <Icon name= "search" size= {25}/>
          </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 55,
    backgroundColor: "white",
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});
