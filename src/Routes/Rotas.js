import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Cadastro from '../Pages/cadastrar'
import carrinho from '../Pages/carrinho';

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(AuthContext);

    if (!logado) {
        return (<Login />)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#191919',
                    },
                    tabBarActiveTintColor: "white"
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="carrinho"
                    component={carrinho}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="camera" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="camera" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}