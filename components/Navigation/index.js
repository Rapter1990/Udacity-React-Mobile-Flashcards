import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Decks from '../Decks/Decks';
import NewDeck from '../NewDeck/NewDeck';
import DeckDetails from '../DeckDetails/DeckDetails';
import NewCard from '../NewCard/NewCard';
import Quiz from '../Quiz/Quiz';


const Tabs = createBottomTabNavigator(
    {
      Decks: {
        screen: Decks,
        navigationOptions: {
          title: 'FlashCards',
          tabBarLabel: 'Decks',
          tabBarIcon: ({ tintColor }) => <Ionicons name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'} size={30} color={tintColor}/>
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
        style: {
          backgroundColor: white,
        },
      }
    }
);

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