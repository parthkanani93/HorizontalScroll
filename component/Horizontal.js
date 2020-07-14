/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
        <View style={styles.outer}>
          <Text style={styles.innertext}>Welcome to my app</Text>
        </View>
        <View style={[styles.outer,styles.red]}>
          <Text style={styles.innertext}>Good Quality Videos</Text>
        </View>
        <View style={[styles.outer,styles.green]}>
          <Text style={styles.innertext}>Support Android And Ios</Text>
        </View>

      </ScrollView >

    );
  }
}

const styles = StyleSheet.create({
  container: {


  },
  outer : {
    backgroundColor: '#0A79DF',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  },
  innertext :{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  red :{
    backgroundColor: '#E83350'

  },
  green :{
    backgroundColor: '#45CE30'

  },


});
