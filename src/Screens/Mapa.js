import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React, { useEffect, useState } from 'react'

import Geolocation from 'react-native-geolocation-service';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Header from "../Components/Header";
import { hasLocationPermission } from '../LocationPermission';
const Mapa = () => {
  [region,setRegion]=useState({
    longitude:0,
    latitude:0,
    longitudeDelta:0,
    latitudeDelta:0
})
useEffect(()=>{
  _getLocation()
},[])
  const _getLocation = async ()=>{
    hasLocationPermission()
    await Geolocation.getCurrentPosition(
    async posicion => {
    const  longitude =  posicion.coords.longitude;
    const  latitude =  posicion.coords.latitude;
    setRegion({...region, longitude,latitude})
    console.log(longitude)
    },
    (error) => {
    console.log(error.code, error.message);
    },
    {
    accuracy: {
    android: 'high',
    ios: 'best',
    },
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 10000,
    distanceFilter: 0,
    forceRequestLocation: true,
    }
    )
    }

  return (
    <SafeAreaProvider>
    <Header tittle="Mapa"/>
  
    <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#DB2D3E"}}>
            <TouchableOpacity style={{...styles.button,}}disabled>

                <Text style={{...styles.text}}>Mapa</Text>
                  <View>
                    <Image
                      source={require("../assets/mapa.png")}
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

export default Mapa



const styles= StyleSheet.create({
  
  button:{
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
  
  },
  text:{
    justifyContent:"center",
    color:"white",
    fontSize:40
  }
})
