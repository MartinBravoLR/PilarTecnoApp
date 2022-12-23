import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Header from "../Components/Header";

import { Icon } from 'react-native-elements'

const Perfil = () => {
  return (
    <SafeAreaProvider>
    <Header tittle="Perfil" backgroundColor="blue"/>
        <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#AD2F87"}}>
            <TouchableOpacity style={{...styles.button,}}disabled>

                <Text style={{...styles.text}}>Perfil</Text>
                  <View>
           
                    <Image
                      source={require("../assets/user.png")}
                      resizeMode="contain"
                      style={{
                        height:35,
                        witdh:25,
                        tintColor:"white"
                      }}/>
                  </View>
           </TouchableOpacity>
          </View>
    </SafeAreaProvider>

  )
}

export default Perfil


const styles= StyleSheet.create({
  
  button:{
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    witdh:40
  
  },
  text:{
    justifyContent:"center",
    color:"white",
    fontSize:40,

  }
})
