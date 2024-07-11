import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


import Form from '../components/FormInput/FormInput';
import Home from '../screens/Home/Home';


export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen
                     name='Home'
                     component={Home}
                     options={{headerTitle: 'Home'}}
                 />

                <Stack.Screen
                  name='Form' 
                  component={Form}
                  options={{headerTitle: 'Formulario'}}
                 />

            </Stack.Navigator>
        </NavigationContainer>
    )
}