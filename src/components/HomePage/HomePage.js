import React, { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text, View} from 'react-native';
import UserContext from "../../../UserContext";

function HomePage({navigation}) {
    const {handleLogout} = useContext(UserContext);
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <MaterialIcons name="home" size={60} color='#cccccc'/>
            <Text style={{fontSize:20}}> Welcome to the Home Page </Text>
            
            <TouchableOpacity onPress={handleLogout} style={{marginTop:20, backgroundColor:'orange', paddingVertical:10, paddingHorizontal:20, borderRadius:10}}>
                <Text style={{fontSize:16, letterSpacing:2}}> LOG OUT </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("settings-page")} style={{marginVertical:20}}>
                <Text style={{color:'blue', fontSize:18}}>
                    Settings
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomePage;