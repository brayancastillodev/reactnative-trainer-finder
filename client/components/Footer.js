import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.icon}>
        <Icon name="home" size={25} color="whitesmoke" />
        <Text style={{color: 'white'}}>Home</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="search1" size={25} color="whitesmoke" />
        <Text style={{color: 'white'}}>Search</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="user" size={25} color="whitesmoke" />
        <Text style={{color: 'white'}}>Profile</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }, 
  icon: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Footer;