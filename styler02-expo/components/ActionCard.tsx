import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
        <View style={[styles.card, styles.elevatedCard]}>

            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>
                    What's new in Javascript 21 - ES12
                </Text>
            </View>

            <Image
            source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/046/250/429/non_2x/geometry-model-elegant-random-abstract-free-photo.jpg'
            }}
            style={styles.cardImage}
            />

            <View style={styles.bodyContainer}>
                <Text numberOfLines={3}>JavaScript is a versatile, lightweight programming language enabling interactive
                    web pages, dynamic content updates, and seamless user experiences across browsers
                    without requiring page reloads.</Text>
            </View>

            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={() =>{openWebsite('https://www.freecodecamp.org/news/whats-new-in-javascript-es12-es2021/')}}>
                    <Text style={styles.socialLinks}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>{openWebsite('https://www.instagram.com/d3v1_prasanna/')}}>
                    <Text style={styles.socialLinks}>Follow Me</Text>
                </TouchableOpacity>
            </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    elevatedCard:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.4,
    },
    headingContainer:{
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },
    headerText:{
        color:'#000',
        fontSize:16,
        fontWeight:'600',
    },
    cardImage:{
        height:190,
    },
    bodyContainer:{
        padding:10,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        justifyContent:'space-evenly',
        // alignItems:'center',
    },
    socialLinks:{
        fontSize:16,
        fontWeight:'500',
        color:'#000000',
        textDecorationLine:'underline',
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:4,
        elevation:2,
    }
})