import { View, Text , Image , StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function LoginScreen() {
  return (
    <View>
      <ImageBackground source ={require('./../../assets/images/background21.jpg')}
        style={{width:500,height:'100%',}}/>
        <View>
        <Text style ={styles.maintext}>SIGANLER LES 
            <Text> SAUVER LES </Text>
        </Text>
        </View>

        <View style={styles.button}>
            <Text style={{textAlign:'center',color:Colors.WHITETEXT,fontSize:20}}>CONNEXION</Text>
        </View>
        <View>
            <Text style={styles.lowtextright}>Mot de passe oublié ?</Text>
        </View>
        <Text style={styles.lowtextleft}>Nouveau compte</Text>
    </View>

   
  )
}

const styles = StyleSheet.create({
    maintext:{
        fontSize:45,
        fontWeight:'bold',
        color:Colors.WHITETEXT,
        textAlign:'center',
        padding : 10,
        margin:'auto', 
        marginTop:-500,
    },
    button : {
        padding: 20,
        backgroundColor : Colors.PRIMARY,
        marginTop :-100,
        
    },
    lowtextright:{
        textAlign:'right',
        padding:10,
        margin:50,
        marginTop:'auto',
        fontSize:14,
        color:Colors.WHITETEXT,
    },
    lowtextleft:{
        textAlign:'left',
        padding:'auto',
        margin:'auto',
        marginLeft:60,
        marginTop:-80,
        marginBottom:'auto',
        fontSize:14,
        color:Colors.WHITETEXT,
    }
})
