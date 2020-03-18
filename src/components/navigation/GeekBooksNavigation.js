// Native Imports
import React from 'react'
import { Text } from 'react-native'

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

// Navigation Options
export const navigationOptions = (title) => {
    return {
        headerTitle: title,
        headerStyle: {
            backgroundColor: 'rgb(255, 255, 255)',
        },
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
        },
        Profile: {
            screen: profileNavigator,
        }
    }
)

const drawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: navigationOptions('GeekBooks')
        },
        Dashboard: bottomTabNavigator
    }
)


export default createAppContainer(drawerNavigator);