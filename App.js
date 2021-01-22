import React from 'react';
import { StyleSheet, View } from 'react-native';
import setNotification from './utils/notification';
import store from './store'

export default class App extends React.Component {
  
  componentDidMount() {
    setNotification();
  }
  render() {
      return (
          <Provider store={store}>
              <View style={styles.container}>
                  
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
