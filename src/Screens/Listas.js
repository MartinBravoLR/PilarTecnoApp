import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native'
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Header from "../Components/Header";

const Listas = () => {
  return (
    <SafeAreaProvider>
      <Header tittle="Listas"/>
      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#FF9158"}}>
            <TouchableOpacity style={{...styles.button,}}disabled>

                <Text style={{...styles.text}}>Listas</Text>
                  <View>
                    <Image
                      source={require("../assets/list.png")}
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

export default Listas

const styles= StyleSheet.create({
  
  button:{
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    witdh:50,
    height:100

  },
  text:{
    justifyContent:"center",
    color:"white",
    fontSize:40
  }
})
