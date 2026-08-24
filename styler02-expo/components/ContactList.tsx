import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid:1,
            name:'John Doe',
            status:'just an extra ordinary teacher',
            imageUrl:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f12a4bf-0af3-484a-910b-68ed5e6cf848/da0kt24-2455f224-891f-4a15-8a6f-956a8264b7b4.png/v1/fill/w_595,h_842,strp/glenn_quagmire_by_tsutsuji123_da0kt24-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQyIiwicGF0aCI6IlwvZlwvNWYxMmE0YmYtMGFmMy00ODRhLTkxMGItNjhlZDVlNmNmODQ4XC9kYTBrdDI0LTI0NTVmMjI0LTg5MWYtNGExNS04YTZmLTk1NmE4MjY0YjdiNC5wbmciLCJ3aWR0aCI6Ijw9NTk1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.u7akL3k95OSPMepCAYGS6Jl5Pae4iTlYhjHh2Bi7ujY'
        },
        {
            uid: 2,
            name: 'Sarah Smith',
            status: 'making coffee disappear since 2015',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80'
        },
        {
            uid: 3,
            name: 'Mike Johnson',
            status: 'probably debugging some code right now',
            imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=700&q=80'
        },
        {
            uid: 4,
            name: 'Emily Chen',
            status: 'always looking for the next adventure',
            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=700&q=80'
        }
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}> 
        {contacts.map(({uid, name, status, imageUrl}) =>(
            <View key={uid} style={styles.userCard}>
                <Image 
                source={{ uri: imageUrl }}
                style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#8D3DAF',
        padding:8,
        borderRadius:10,
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:30,
        marginRight:14,
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#FFF',
    },
   
    userStatus:{
        fontSize:14,
        color:'#ccc3c3',
    }
})