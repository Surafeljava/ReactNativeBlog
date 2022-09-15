import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, AsyncStorage } from 'react-native';

import { HomePage, SettingsPage, Authentication } from "./src/components";
import UserContext from "./UserContext";

const Stack = createStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const saveLoggedInToken = async () => {
    await AsyncStorage.setItem('token', 'LoggedInToken');
  };

  const removeLoggedInToken = async () => {
    await AsyncStorage.removeItem('token');
  };

  const checkIfLoggedInTokenSaved = async () => {
    const value = await AsyncStorage.getItem('token');
    //If we have token!!
    if (value !== null) {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    //1. Send logout request to the backend
    //2. Remove saved token
    removeLoggedInToken();
    //3. Change the state to notloggedin (false)
    setLoggedIn(false);
  }

  const handleLogin = () => {
    //1. Save token to local storage
    saveLoggedInToken();
    //2. Change the state to loggedin (true)
    setLoggedIn(true);
  }

  useEffect(()=>{
    checkIfLoggedInTokenSaved();
  }, []);

  return (
    <UserContext.Provider value={{handleLogin, handleLogout}}>
      <View style={{flex:1, backgroundColor: 'orange'}}>
        <NavigationContainer>
          {loggedIn && (
            <Stack.Navigator>
              <Stack.Screen name="home-page" component={HomePage}/>
              <Stack.Screen name="settings-page" component={SettingsPage}/>
            </Stack.Navigator>
          )}

          {!loggedIn && (
            <Stack.Navigator>
              <Stack.Screen name="authentication-page" component={Authentication}/>
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({});


            // screenOptions={{header: () =>null}}
