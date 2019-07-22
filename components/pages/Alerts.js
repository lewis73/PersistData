import React, {Component} from 'react';
import { Animated, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import styles from './../../css/styles'

class Alerts extends Component {
  state = {
    fadeAnims: new Animated.Value(0),
    fadeAnimt: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
  setTimeout(() => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnims,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }, 500)
  setTimeout(() => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnimt,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }, 1000)
  }

render() {
  let { fadeAnims } = this.state;
return(
  <View>
  <Animated.View                 // Special animatable View
        style={{
          opacity: fadeAnims,         // Bind opacity to animated value
        }}
      >

      <View style={styles.subcontainer}>
        <View style={{flexDirection:'row', flex:1}}>
          <Text style={{fontFamily: 'Roboto-Regular',
          fontSize: 14,color:'#023a6d', marginBottom: 0}}>{'YOUR ACCOUNT OPENING STATUS'}</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', width:400}}>
          <View><Image style={{marginTop:12, marginLeft:11, height:200,width:40}} source={require('./../../images/lineart.png')} />
          </View>
          <View>
            <Text style={{marginLeft: 15,marginTop:25,fontFamily: 'Roboto-Regular',
  fontSize: 18,color: '#007aeb'}}>{'Form Submission'}</Text>
<Text style={{marginLeft: 15,marginTop:33,fontFamily: 'Roboto-Regular',
  fontSize: 18,color: '#007aeb'}}>{'Processing Information'}</Text>
<Text style={{marginLeft: 15,marginTop:31,fontFamily: 'Roboto-Regular',
  fontSize: 18,color: '#b5b5b5'}}>{'Setting up account\'s details'}</Text>
<Text style={{marginLeft: 15,marginTop:27,fontFamily: 'Roboto-Regular',
  fontSize: 18,color: '#b5b5b5'}}>{'Opened'}</Text>
          </View>
          </View>
          <View style={{
              alignSelf:'flex-start',
              alignItems:'flex-start',
                fontFamily: 'Roboto-Regular',
            fontSize: 14,
            fontWeight: '500',
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'center',
          height: 38,
            borderRadius: 4,
            marginTop: 17,
            marginLeft: 15,
            borderWidth: 1,
            borderColor: '#48a7ff',
            marginRight: 15}}><Text style={{color:'#007aeb'}}>{'Notify when completed'}</Text>
          </View>

    </Animated.View>
</View>

)
}
}

const stylez = StyleSheet.create({
  subcontainer: {
    marginBottom: 20,
  },
  textz: {
    paddingTop: 15,
    paddingLeft: 15,
    fontSize: 14,
  fontFamily: 'Roboto-Regular',
  color: '#023a6d'
},
textzz: {
  paddingTop: 10,
  paddingLeft: 15,
  fontWeight:'bold',
  fontSize: 16,
fontFamily: 'Roboto-Regular',
color: '#012c63'
}
})

export default Alerts;
