import React, { JSX, use } from "react";
import {View,Text,StyleSheet, useColorScheme} from "react-native";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";

function AppPro(): JSX.Element{
  const isDarkMode = useColorScheme() === "dark";
    return (
      <View style={styles.container}>
        <Text style={isDarkMode?styles.whiteText:styles.blackText}>Hello world</Text>
        <Text style={isDarkMode?styles.whiteText:styles.blackText}>Hello world</Text>
        <Text style={isDarkMode?styles.whiteText:styles.blackText}>Hello world</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      backgroundColor: '#0c6d96',
      justifyContent:"center",
    },
    whiteText:{
      color: '#FFFFFF' 
       },
    blackText:{
      color: '#000000'
    }
})

export default AppPro;