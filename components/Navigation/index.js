import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Decks from '../Decks/Decks';
import NewDeck from '../NewDeck/NewDeck';
import DeckDetails from '../DeckDetails/DeckDetails';
import NewCard from '../NewCard/NewCard';
import Quiz from '../Quiz/Quiz';
import {white , azure, lightPurp } from '../../utils/colors'


const Tabs = createBottomTabNavigator(
    {
      Decks: {
        screen: Decks,
        navigationOptions: {
          title: 'FlashCards',
          tabBarLabel: 'Decks',
          tabBarIcon: ({ tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} size={30} color={tintColor}/>
        }
      },
      NewDeck: {
        screen: NewDeck,
        navigationOptions: {
          title: 'FlashCards',
          tabBarLabel: 'New Deck',
          tabBarIcon: ({ tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle-outline'} size={30} color={tintColor}/>
        }
      }
    },
      {
      tabBarOptions: {
        activeTintColor: lightPurp,
        style: {
          backgroundColor: white,
        },
      }
    }
);

Tabs.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  
  const headerTitle = routeName;
  return {
    headerTitle,
  };
};

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
      },
      DeckDetails: {
        screen: DeckDetails,
        navigationOptions: {
          headerTintColor: white,
          headerStyle: {
            backgroundColor: azure
          }
        }
      },
      NewCard: {
        screen: NewCard,
        navigationOptions: {
          headerTintColor: white,
          headerStyle: {
            backgroundColor: azure
          }
        }
      },
      Quiz: {
        screen: Quiz,
        navigationOptions: {
          headerTintColor: white,
          headerStyle: {
            backgroundColor: azure
          }
        },
      },
    })
 
    
export default createAppContainer(MainNavigator);