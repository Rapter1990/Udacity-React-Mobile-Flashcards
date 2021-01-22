import React, {Fragment} from 'react';
import { View, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import MainNavigator from './components/Navigation/MainNavigator';


function MainStatusBar ({backgroundColor, ...props}) {
    return (
      <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </View>
    )
}

const StatusBarNavigation =(props)=> {
    return (
        <Fragment>
            <MainStatusBar
                backgroundColor="black"
                barStyle="light-content"
            />
            <MainNavigator />
        </Fragment>
    );
}

export default StatusBarNavigation;
