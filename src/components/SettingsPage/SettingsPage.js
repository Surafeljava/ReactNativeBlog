import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, Button} from 'react-native';

function SettingsPage({navigation}) {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <MaterialIcons name="settings" size={40} color='red' style={{marginVertical:10}}/>
            <Text style={{fontSize:20, marginBottom:20}}> Settings Page </Text>
            <Button title="Back to Home" onPress={() => navigation.goBack()}/>
        </View>
    );
}

export default SettingsPage;