import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity, FlatList, ViewComponent, TextInput, Button } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class App extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <View style={{ paddingTop: 64}}>
          <Text style={{fontSize: 36, color:"#003366", fontFamily: "Roboto"}}>Tentang Saya</Text>
        </View>
        <View>
          <Icon name= "account-circle" size={200}/>
        </View>
        <View>
          <Text style={{paddingVertical: 10, fontSize: 24, fontFamily: "Roboto",
    fontWeight: 700, color: "#003366"}}>Acap Pemborong</Text>
        </View>
        <View>
          <Text style={{fontSize: 16, fontFamily: "Roboto",
    fontWeight: 700, color: "#3EC6FF"}}>React Native Developer</Text>
        </View>
        <View style= {styles.portfolio}>
          <View style={{alignItems:'flex-start', width: 80, height: 21, fontSize:18, color: "#003366", padding: 10}}>
            <Text>Portfolio</Text>
          </View>
          <View
            style={{
              borderBottomColor: '#003366',
              borderBottomWidth: 1,
              paddingVertical: 10
            }}
          />
          <View style= {styles.content}>
            <View  style={{alignItems: 'center'}}>
            <Image source={require("./Images/vector.png")} style={styles.iconStyle}/>
            <Text style={styles.contentText}>@Rbernanda</Text>
            </View>
            
            <View  style={{alignItems: 'center'}}>
            <Image source={require("./Images/vector (1).png")} style={styles.iconStyle}/>
            <Text style={styles.contentText}>@Rbernanda</Text>
            </View>
          </View>
        </View>

        <View style= {styles.hubungi}>
          <View style={{alignItems:'flex-start', fontSize:18, color: "#003366", padding: 10}}>
            <Text>Hubungi Saya</Text>
          </View>
          <View
            style={{
              borderBottomColor: '#003366',
              borderBottomWidth: 1,
            }}
          />
          <View style= {styles.contentHubungi}>
            <View  style={{alignItems: 'center', flexDirection: "row",}}>
            <Image source={require("./Images/facebook.png")} style={styles.iconStyle}/>
            <Text style={styles.contentText}>@Rbernanda</Text>
            </View>
            
            <View  style={{alignItems: 'center', flexDirection: "row"}}>
            <Image source={require("./Images/instagram.png")} style={styles.iconStyle}/>
            <Text style={styles.contentText}>@Rbernanda</Text>
            </View>

            <View  style={{alignItems: 'center', flexDirection: "row",}}>
            <Image source={require("./Images/twitter.png")} style={styles.iconStyle}/>
            <Text style={styles.contentText}>@Rbernanda</Text>
            </View>
          </View>
        </View>
        
      </View>

    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  portfolio: {
    height: 140,
    width: 359,
    backgroundColor: "#EFEFEF",
    marginVertical: 10,
    borderRadius: 16
  },
  hubungi: {
    height: 251,
    width: 359,
    backgroundColor: "#EFEFEF",
    marginVertical: 10,
    borderRadius: 16
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  contentHubungi: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 15,
  },    
  iconStyle: {
    height: 39, 
    width: 42, 
    marginVertical: 10,
    marginHorizontal: 60
  },
  contentText: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 700,
    color: "#003366",
  }
})