import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Videoitem from "./videoitem"
import data from "./data.json"

export default class App extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <View style={styles.navBar}>
          <Image source={require("./Images/logo.png")}style={{width: 98, height: 22}} /> 
          <View style={styles.rightNavbar}>
            <TouchableOpacity>
            <Icon style= {styles.navItem} name= "search" size= {25}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon style= {styles.navItem} name= "account-circle" size= {25}/>
            </TouchableOpacity>
          </View>
          </View>
      <View style= {styles.body}>
      <FlatList data={data.items} renderItem={(video) => <Videoitem video={video.item}/>}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={()=> <View style={{height: 0.5, backgroundColor: "#E5E5E5"}}/>}
      />
      </View>
      <View style= {styles.tabBar}>
        <TouchableOpacity style= {styles.tabItems}>
          
            <Icon name= "home" size= {25}/>
            <Text style={styles.tabTitle}>Home</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style= {styles.tabItems}>
          
            <Icon name= "whatshot" size= {25}/>
            <Text style={styles.tabTitle}>Trending</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style= {styles.tabItems}>
          
            <Icon name= "subscriptions" size= {25}/>
            <Text style={styles.tabTitle}>Subscriptions</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style= {styles.tabItems}>
          
            <Icon name= "folder" size= {25}/>
            <Text style={styles.tabTitle}>Library</Text>
          
        </TouchableOpacity>
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
  },
  rightNavbar: {
    flexDirection: "row",

  },
  navItem: {
    margin: 25,
  },
  body: {
    flex: 1,
  },
  tabBar: {
    height: 60,
    backgroundColor: "White",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabItems: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabTitle: {
    fontSize: 11,
    color: "#3c3c3c",
    paddingTop: 3,
  }
});
