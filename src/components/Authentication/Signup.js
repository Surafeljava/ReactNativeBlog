import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import UserContext from "../../../UserContext";

function Signup({onButtonClick}){
    const {handleLogin} = useContext(UserContext);
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:25, marginBottom:20}}>
                Signup Page
            </Text>

            <TouchableOpacity onPress={handleLogin} style={{marginBottom:10, backgroundColor:'orange', paddingVertical:10, paddingHorizontal:20, borderRadius:10}}>
                <Text style={{fontSize:16, letterSpacing:2}}> SIGNUP </Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row'}}>
                <Text> Already has account?  </Text>
                <TouchableOpacity onPress={onButtonClick}>
                    <Text style={{color:'blue'}}> Login </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Signup;