// Native Imports
import React from 'react'
import { Image } from 'react-native'

// React Navigation
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

// Screens
import HomeScreen from '../screens/HomeScreen'
import DashboardScreen from '../screens/DashboardScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CategoryScreen from '../screens/CategoryScreen'
import BookDetailScreen from '../screens/BookDetailScreen'

// Icons
import { Ionicons } from '@expo/vector-icons';

// Navigation Options
export const navigationOptions = (title) => {
    const uri = 'https://bitwiseindustries.com/wp-content/uploads/2020/03/owl.png'
    return {
        headerTitle: title,
        headerStyle: {
            backgroundColor: 'rgb(255, 255, 255)',
        },
        headerRight: () => (
            <Image style={{width: 40, height: 40, marginRight: 20}} source={{uri}}/>
        ),
        drawerLockMode: 'locked-closed', // Prevents drawer from opening
    }
}

const dashboardNavigator = createStackNavigator(
    {
        Dashboard: {
            screen: DashboardScreen,
            navigationOptions: navigationOptions('Dashboard')
        },
        Category: {
            screen: CategoryScreen,
            navigationOptions: navigationOptions('Category Type')
        },
        BookDetail: {
            screen: BookDetailScreen,
            navigationOptions: navigationOptions('Book Type')
        }
    }
)

const profileNavigator = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            navigationOptions: navigationOptions('Profile')
        },
        BookDetail: {
            screen: BookDetailScreen,
            navigationOptions: navigationOptions('Book Type')
        }
    }
)

const bottomTabNavigator = createBottomTabNavigator(
    {
        Dashboard: {
            screen: dashboardNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => <Ionicons name="ios-book" size={32} color={tabInfo.tintColor}/>,
            }
        },
        Profile: {
            screen: profileNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => <Ionicons name="ios-person" size={32} color={tabInfo.tintColor}/>,
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: '#00aeef',
            style: {
                backgroundColor: '#231f20',
                paddingTop: 5,
                paddingBottom: 3,
            }
        }
    }
)

const drawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: navigationOptions('GeekBooks')
        },
        Dashboard: {
            screen: bottomTabNavigator,
            navigationOptions: {
                drawerLockMode: 'locked-closed',
            }
        },
    },
)


export default createAppContainer(drawerNavigator);