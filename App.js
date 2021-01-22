import React from 'react';
import { StyleSheet, View } from 'react-native';
import setNotification from './utils/notification';
import store from './store'
import getAllDecks from './actions/index'
import HomeScreen from './components/HomeScreen/index'
import { Provider } from "react-redux";

export default class App extends React.Component {
  
  componentDidMount() {
    store.dispatch(getAllDecks());
    setNotification();
  }
  render() {
      return (
          <Provider store={store}>
              <View style={styles.container}>
                <HomeScreen />
              </View>
          </Provider>
      );
  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#dde'
  }
});
