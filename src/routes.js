import React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Main from './pages/Main';
import Details from './pages/Details';

const StackMain = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: ({ navigation }) => ({
            title: 'Agenda',
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                    <MaterialIcons name="menu" style={{fontSize: 30, marginLeft: 5}} color="#FFF"/>
                </TouchableOpacity>
            
        })
    },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#57136F'
            }
            
        }
});

const StackDetails = createStackNavigator({
    Details: {
        screen: Details,
        navigationOptions: ({ navigation }) => ({
            title: 'Visualizar',
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                    <MaterialIcons name="menu" style={{fontSize: 30, marginLeft: 5}} color="#FFF"/>
                </TouchableOpacity>
            
        })
    }, 
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#57136F'
            }
            
        }
});



const Routes = createAppContainer(
    createDrawerNavigator({
        Main: {
            screen: StackMain,
            navigationOptions: {
                title: 'Criar',
            },
        },
        Detail: {
            screen: StackDetails,
            navigationOptions: {
                title: 'Visualizar',
            },
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#57136F'
            }
        }
    })
);

export default Routes;