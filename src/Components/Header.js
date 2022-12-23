import React from 'react';

import {
  Image,
  Text,
  StyleSheet,
  View, 
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { Header} from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


const HeaderApp=(props) => {
    const {tittle = "PilarTecno",rightComponent,leftComponent}= props;
    const navigation = useNavigation();
    const navigateTO = (route)=>{
      navigation.navigate(route)};
  return (

    <Header
    backgroundColor='#9098F8'
    leftComponent={
      <View >
        <TouchableOpacity onPress={() => {navigateTO("Home")}}>
 
        <View>
                  <Image
                    source={require("../assets/home-page.png")}
                    resizeMode="contain"
                    style={{
                      height:25,
                      witdh:25,
                      tintColor:"white"
                    }}

                  />
                </View>
        </TouchableOpacity>
        
      </View>
  }
      centerComponent={{ text: tittle, style: styles.heading }}
    />
 );}
 
 export default HeaderApp;


const styles = StyleSheet.create({

heading: {
  color: 'white',
  fontSize: 26,
  fontWeight: 'bold',
},
headerRight: {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 5,
},
subheaderText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
});
     
