import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import UserContext from "../../../UserContext";

function Login({onButtonClick}){

    const {handleLogin} = useContext(UserContext);
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:25, marginBottom:20}}>
                Login Page
            </Text>
            
            <TouchableOpacity onPress={handleLogin} style={{marginBottom:10, backgroundColor:'orange', paddingVertical:10, paddingHorizontal:20, borderRadius:10}}>
                <Text style={{fontSize:16, letterSpacing:2}}> LOGIN </Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row'}}>
                <Text> New here?  </Text>
                <TouchableOpacity onPress={onButtonClick}>
                    <Text style={{color:'blue'}}> Create Account </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;