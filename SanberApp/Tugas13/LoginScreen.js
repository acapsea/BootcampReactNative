import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity, FlatList, ViewComponent, TextInput, Button } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class App extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <View style= {styles.logo}>
          <Image source={require("./Images/logo.png")} style={{height: 102, width: 375}} />
        </View>
        <View style={styles.register}>
          <Text style={{fontSize: 24, fontFamily: "Roboto", width: 88, height: 28, lineHeight: 28.13, color: "#003366"}}>
          Login
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.form}>
            <View style={styles.innerForm}>
              <Text style={styles.textStyle}>Username</Text>
              <TextInput style={styles.inputStyle}/>
            </View> 
            <View style={styles.innerForm}>
              <Text style={styles.textStyle}>Email</Text>
              <TextInput style={styles.inputStyle}/>
            </View>  
            <View style={styles.innerForm}>
              <Text style={styles.textStyle}>Password</Text>
              <TextInput style={styles.inputStyle}/>
            </View>   
            <View style={styles.SecondaryButton}>
              <TouchableOpacity >
                <Text  style={styles.buttonText}>Masuk</Text>
              </TouchableOpacity>
            </View> 
            <View style={{alignItems:'center'}}>
              <TouchableOpacity>
                <Text style={{fontSize: 24, color: "#3EC6FF"}}>atau</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity>
                <Text style={styles.buttonText}>Daftar ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </View>

    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  },
  logo: {
    alignItems: "center",
    paddingVertical: 43,
    backgroundColor: "white",
    height: 200,
  },
  register: {
    alignItems: "center",
    paddingVertical: 20
  },
  formContainer: {
    flex: 1,
  },
  form: {
    alignItems: 'center',
    paddingVertical: 10
  },
  innerForm: {
    alignItems: "flex-start",
    paddingVertical: 5
  },
  textStyle: {
    flexDirection: "row",
    width:120,
    height:19, 
    fontFamily: "Roboto", 
    color: "#003366",
    fontSize: 16,
    lineHeight: 18.5,
    paddingBottom: 25
  },
  inputStyle: {
    borderColor: "#003366",
    height: 48, 
    width: 294,
    borderWidth: 1
  },
  button: {
    height: 40,
    width: 140,
    backgroundColor: "#003366",
    marginVertical: 15,
    borderRadius: 16,
    alignItems: 'center'
  },
  SecondaryButton: {
    height: 40,
    width: 140,
    backgroundColor: "#3EC6FF",
    marginVertical: 15,
    borderRadius: 16,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontFamily: "Roboto",
    color: "#FFFFFF",
    lineHeight: 28,
    paddingVertical: 5,
    fontWeight: 400,
  }
})