import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yy = today.getFullYear();

today = dd + " - " + mm + " - " + yy;

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>ATTENDANCE SHEET</Text>
        <Text style={styles.section}>Class B </Text>
        <Text style={styles.day}>{today}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textColor:'yellow',
     classStyle: {
    fontSize: 21,
    textAlign: "center",
    paddingTop: 50,
  },
   section: {
    fontSize: 21,
    textAlign: "center",
    paddingTop: 50,
  },
    day: {
    textAlign: "center",
    marginTop: 20,
  },
  }
});
