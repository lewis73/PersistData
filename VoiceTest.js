// @flow
import React, { Component } from 'react';
import { SafeAreaView, Alert, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import { Input } from 'react-native-elements';
import styles from './css/styles2'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Interaction from './components/Interaction'
import SplashScreen from 'react-native-splash-screen';

class VoiceTest extends Component {
  state = {
    children:[<Interaction />],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    let arr = this.state.children.map((r, i) => {
    return (
      <View key={ i }>
      {r}
      </View>
    );
  });
    return (
<SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
  {arr}
</SafeAreaView>

    );
  }
}


export default VoiceTest;
