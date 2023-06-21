import React,{useState} from 'react'
import logo from "../assets/logo.jpg"
import { StatusBar } from 'expo-status-bar';
import { Button,  ScrollView,FlatList,  StyleSheet, Text, TextInput, View,RefreshControl, SectionList, ImageBackground,Image, KeyboardAvoidingView  } from 'react-native';

export default function Login() {

return(
<View style={styles.background} >
<View  style={styles.Login_container}>
    <View  style={styles.image_container}>
    <Image style={styles.Image_logo} source={logo} />
    </View>
  <Text style={styles.loginText}>Login / Register</Text>
  <View>
  <Text style={styles.loginText}>Email</Text>
  <TextInput placeholder='Email' style ={styles.loginMail}/>
  <Text style={styles.loginText}>password</Text>
  <TextInput placeholder='password' style ={styles.loginMail}/>
  <View style={styles.Button}>
  <Button   title='Login'/>
  </View>
  
  </View>
  </View>
  <Text style={styles.line} numberOfLines={1}> -----------------------  or  -------------------------</Text>
  <Button style={styles.Button}  title='Register'/>
<StatusBar style='auto'/>
</View>

 
  )
}



const styles = StyleSheet.create({
 
  background:{
    flex:1,
    backgroundColor:"#52000C",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
   
  },
Login_container:{
  alignItems:"center",
  marginBottom:290,
  width:450,
  height:200,
  justifyContent:"space-between",
color:"#ffffff",

},
image_container:{
justifyContent:"center",
alignItems:"center"
},

  Image_logo:{
    height:150,
    width:150,
    
  },
  loginText:{
    color:"#ffffff",
    margin:5,
    fontSize:20,
    
  },
  loginMail:{
    color:"#ffffff",
    borderColor:"#000000",
    borderWidth:3,
    marginTop:10,
    marginBottom:2,
    width:320,
    height:40,
    borderRadius:5,
    fontSize:20
   
  },
  Button:{
    backgroundColor:'#1B74E4',
   width:90,
   marginTop:20,
   alignSelf:"center",
   borderRadius:6,
    position:'relative',
    color:"#ffffff"
  }
,
line:{
  marginBottom:40
}
})