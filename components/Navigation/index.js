import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Decks from '../Decks/Decks';
import NewDeck from '../NewDeck/NewDeck';
import DeckDetails from '../DeckDetails/DeckDetails';
import NewCard from '../NewCard/NewCard';
import Quiz from '../Quiz/Quiz';
import {white , azure, lightPurp, black } from '../../utils/colors'
import { Animated, Easing } from 'react-native'

/* The screens you add to IOS_MODAL_ROUTES will have the modal transition.  */
const IOS_MODAL_ROUTES = ['OptionsScreen'];

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
          headerTintColor: black,
          headerStyle: {
            backgroundColor: white
          }
        }
      },
      NewCard: {
        screen: NewCard,
        navigationOptions: {
          headerTintColor: black,
          headerStyle: {
            backgroundColor: white
          }
        }
      },
      Quiz: {
        screen: Quiz,
        navigationOptions: {
          headerTintColor: black,
          headerStyle: {
            backgroundColor: white
          }
        },
      },
  },
  {
    transitionConfig
  }
)

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { position, layout, scene } = sceneProps
      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0]
      })
      const slideFromRight = { transform: [{ translateX }] }

      return slideFromRight
    },
}}

export default createAppContainer(MainNavigator);