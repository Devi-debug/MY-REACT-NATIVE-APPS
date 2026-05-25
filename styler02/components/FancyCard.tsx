import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Cartoons</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
           source={{
                   uri:'https://wallpaperbat.com/img/877906-chhota-bheem-ideas-cartoon-wallpaper-hd-cartoon-wallpaper-best-cartoon-shows.jpg'
               }}
           style={styles.cardImage}
         />
      
        <View style= {styles.cardBody}>
          <Text style= {styles.cardTitle}>Chota Bheem</Text>
          <Text style= {styles.cardLabel}>Favorite cartoon of many children</Text>
          <Text style= {styles.cardDescription}>Chhota Bheem is an Indian animated series 
            about a brave, intelligent, and strong young boy named Bheem who protects his village,
            Dholakpur, from various threats with the help of his friends.</Text>
            <Text style= {styles.cardFooter}>Today 6:00 PM</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card:{
    width:350,
    height:360,
    borderRadius:8,
    marginVertical:12,
    marginHorizontal:15,

  },
  cardElevated:{
    backgroundColor : '#FFFFFF',
    elevation: 3,
    shadowOffset:{
      width:1,
      height:1,
    }

  },
  cardImage:{
    height:180,
    marginBottom:10,
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
  },
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:20,
  },
  cardTitle:{
    color: '#242B2E',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:6,
  },
  cardLabel:{
    color: '#000000',
    fontSize:14,
    marginBottom:6,
  },
  cardDescription:{
    color: '#000000',
    fontSize:12,
    marginBottom:12,
    marginTop:6,
    flexShrink:1,
  },
  cardFooter:{
    color: '#000000'
  }
})