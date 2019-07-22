import React, {Component} from 'react';
import { Animated, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import styles from './../../css/styles'

class Insights extends Component {
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
          fontSize: 14,color:'#023a6d', marginBottom: 0}}>{'YOUR E-DELIVERIES FOR MAY'}</Text>
          </View>
        </View>
        <View style={styles.subcontainer}>
          <View style={{ width: 329, height: 75,borderRadius: 4,
              marginTop: 10,backgroundColor: '#ffffff',  shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 3, width: -1 },
            shadowOpacity: 1,
            shadowRadius: 1,}}>
            <Text style={stylez.textz}>{'CHECKING ACCOUNT  **** 9897 0000'}</Text>
              <Text style={stylez.textzz}>{'Statement'}</Text>
            </View>
          </View>

          <View style={styles.subcontainer}>
            <View style={{ width: 329, height: 75,borderRadius: 4,
                marginTop: 10,backgroundColor: '#ffffff',  shadowColor: 'rgba(0,0,0, .4)',
              shadowOffset: { height: 3, width: -1 },
              shadowOpacity: 1,
              shadowRadius: 1,}}>
              <Text style={stylez.textz}>{'SAVINGS ACCOUNT  **** 9897 1233'}</Text>
                <Text style={stylez.textzz}>{'Statement'}</Text>
              </View>
            </View>

            <View style={styles.subcontainer}>
              <View style={{ width: 329, height: 75,borderRadius: 4,
                  marginTop: 10,backgroundColor: '#ffffff',  shadowColor: 'rgba(0,0,0, .4)',
                shadowOffset: { height: 3, width: -1 },
                shadowOpacity: 1,
                shadowRadius: 1,}}>
                <Text style={stylez.textz}>{'DEPOSIT ACCOUNT  **** 9897 1789'}</Text>
                  <Text style={stylez.textzz}>{'Statement'}</Text>
                </View>
              </View>
              <View style={styles.subcontainer}>
                <View style={{ width: 329, height: 75,borderRadius: 4,
                    marginTop: 10,backgroundColor: '#ffffff',  shadowColor: 'rgba(0,0,0, .4)',
                  shadowOffset: { height: 3, width: -1 },
                  shadowOpacity: 1,
                  shadowRadius: 1,}}>
                  <Text style={stylez.textz}>{'TRANSACTIONAL ACCOUNT  **** 9897 2150'}</Text>
                    <Text style={stylez.textzz}>{'Statement'}</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row', marginTop:23, marginBottom:34, paddingLeft: 15,}}>
                <View style={styles.seeDetails1}><Text style={{color:'#007aeb'}}>{'Show April'}</Text>
                </View>
                <View  style={styles.seeDetails}><Text style={{color:'#007aeb'}}>{'Show June'}</Text>
                </View>
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

export default Insights;
