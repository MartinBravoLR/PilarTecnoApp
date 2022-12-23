import { StyleSheet, Text, View ,TouchableOpacity,Image,Dimensions} from 'react-native'
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Header from "../Components/Header";

const Tareas = () => {

  return (
    
    <SafeAreaProvider>
    <Header tittle="Tareas"/>
    <View style={{flex:1,alignItems:"center",backgroundColor:"#FFDF69",justifyContent:"center",}}>
            <TouchableOpacity style={{...styles.button,}}disabled>

                <Text style={{...styles.text}}>Tareas</Text>
                  <View>
                    <Image
                      source={require("../assets/open-book.png")}
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

export default Tareas

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
    fontSize:40
  }
})
