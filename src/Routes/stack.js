import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Login from "../Screens/Login";
import { AppTab } from './tab';
import Tareas from "../Screens/Tareas";
import { NavigationContainer } from '@react-navigation/native';


const Stack=createNativeStackNavigator();

export const AppStack=() =>{

    const sesion=true
    return(
        
        <Stack.Navigator initialRouteName="Home"screenOptions={{headerShown:false}}>
            {
                sesion?
        
            <Stack.Screen name ="Main" component ={AppTab}/>
            
            : 
            <Stack.Screen name ="Login" component ={Login}/>

            }
         <Stack.Screen name ="Tareas" component ={Tareas}/>

        </Stack.Navigator>
    );
}
