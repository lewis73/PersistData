import React, {Component} from 'react';
import { Animated, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import styles from './../../css/styles'

class YourBalanceIs extends Component {
  state = {
    fadeAnimv: new Animated.Value(0),
    fadeAnimw: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
  setTimeout(() => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnimv,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }, 500)
  setTimeout(() => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnimw,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }, 1000)
  }

render() {
  let { fadeAnimv } = this.state;
return(
  <View>
  <Animated.View                 // Special animatable View
        style={{
          opacity: fadeAnimv,         // Bind opacity to animated value
        }}
      >

      <View style={styles.subcontainer}>
        <View style={{flexDirection:'row', flex:1}}>
          <Text style={{fontFamily: 'Roboto-Regular',
          fontSize: 14,color:'#012c63', marginBottom: 0}}>YOUR BALANCES</Text>
          </View>
        </View>

                  <View style={styles.subcontainer}>
                    <View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={{fontFamily: 'Roboto-Regular',fontSize: 12, marginTop: 10, width: 135, color:'#023a6d'}}>{'CHECKING ACCOUNT'}</Text>
                        <Text style={{fontSize: 18, color:'#012c63',opacity:0.53, paddingRight: 3, paddingTop:8}}>$</Text><Text style={{color:'#012c63', fontSize: 36}}>{'75,000'}</Text><Text style={{fontSize: 18, color:'#012c63',opacity:0.53, paddingLeft: 3, paddingTop:8}}>.95</Text>
                      </View>

                      <View style={{flexDirection:'row',marginTop: 15,}}>
                        <Text style={{fontFamily: 'Roboto-Regular',fontSize: 12, marginTop: 10, width: 135, color:'#023a6d'}}>{'SAVING ACCOUNT'}</Text>
                        <Text style={{fontSize: 18, color:'#012c63',opacity:0.53, paddingRight: 3, paddingTop:8}}>$</Text><Text style={{color:'#012c63', fontSize: 36}}>{'15,000'}</Text><Text style={{fontSize: 18, color:'#012c63',opacity:0.53, paddingLeft: 3, paddingTop:8}}>.00</Text>
                      </View>

                      <View style={{flexDirection:'row', marginTop:23, marginBottom:34}}>
                      <View style={styles.seeDetails1}><Text style={{color:'#48a7ff'}}>{'See Details'}</Text>
                      </View>
                      <View  style={styles.seeDetails}><Text style={{color:'#48a7ff'}}>{'Transfer money'}</Text>
                      </View>
                      </View>

                    </View>
                  </View>

    </Animated.View>
</View>

)
}
}

export default YourBalanceIs;
