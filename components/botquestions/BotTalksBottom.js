


import React, {Component} from 'react';
import { Dimensions, Animated, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import styles from './../../css/styles'
import { Input,Button } from 'react-native-elements';


class BotTalksBottom extends Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount(){
  setTimeout(() => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }, 200)
  }

render() {
  let { fadeAnim } = this.state;
return(
  <Animated.View                 // Special animatable View
        style={{
          opacity: fadeAnim,         // Bind opacity to animated value
        }}>
            <View style={stylez.textWrapper}>
            <Text style={stylez.text}>{this.props.talkBottom}</Text>
            </View>

    </Animated.View>

)
}
}

const stylez = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    textWrapper: {
      alignSelf:'flex-start',
      flex:1,
 borderWidth: 1,
 marginRight: 15,
 borderColor:'#bdddf7',
 backgroundColor:'#bdddf7',
borderRadius: 27,
paddingTop: 12,
paddingBottom: 12,
paddingRight: 12,
paddingLeft: 12,
    },
    text: {
  fontFamily: 'Roboto-Regular',
  fontSize: 16,
  color: '#023a6d',
},
})


export default BotTalksBottom;
