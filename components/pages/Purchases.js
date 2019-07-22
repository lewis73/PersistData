import React, {Component} from 'react';
import { Animated, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Dimensions } from 'react-native';
import styles from './../../css/styles'
let width = Dimensions.get('screen').width;
class Purchases extends Component {
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
      <View style={stylez.subcontainer}>
        <View style={stylez.conwidth}><Text style={stylez.text1}>{'RETAIL'}</Text><Text style={stylez.text2}>{'23 Transactions'}</Text></View>
        <View style={stylez.wraptext}><Text style={{fontSize: 12, color:'#023a6d',opacity:0.53, paddingRight: 3, paddingTop:4}}>$</Text><Text style={{color:'#023a6d', fontSize: 24,width:75,}}>{'34K'}</Text>
      </View>
    </View>
    <View style={stylez.subcontainer1}>
      <View style={stylez.conwidth}><Text style={stylez.text1}>{'RESTAURANTS'}</Text><Text style={stylez.text2}>{'67 Transactions'}</Text></View>
      <View style={stylez.wraptext}><Text style={{fontSize: 12, color:'#023a6d',opacity:0.53, paddingRight: 3, paddingTop:4}}>$</Text><Text style={{color:'#023a6d', fontSize: 24,width:75,}}>{'17K'}</Text>
    </View>
  </View>

  <View style={stylez.subcontainer1}>
    <View style={stylez.conwidth}><Text style={stylez.text1}>{'TRAVEL'}</Text><Text style={stylez.text2}>{'16 Transactions'}</Text></View>
    <View style={stylez.wraptext}><Text style={{fontSize: 12, color:'#023a6d',opacity:0.53, paddingRight: 3, paddingTop:4}}>$</Text><Text style={{color:'#023a6d', fontSize: 24,width:75,}}>{'16.9K'}</Text>
  </View>
</View>
<View style={stylez.subcontainer1}>
  <View style={stylez.conwidth}><Text style={stylez.text1}>{'HEALTH'}</Text><Text style={stylez.text2}>{'3 Transactions'}</Text></View>
  <View style={stylez.wraptext}><Text style={{fontSize: 12, color:'#023a6d',opacity:0.53, paddingRight: 3, paddingTop:4}}>$</Text><Text style={{color:'#023a6d', fontSize: 24,width:75,}}>{'11K'}</Text>
</View>
</View>
<View style={stylez.subcontainer1}>
  <View style={stylez.conwidth}><Text style={stylez.text1}>{'OTHER'}</Text><Text style={stylez.text2}>{'12 Transactions'}</Text></View>
  <View style={stylez.wraptext}><Text style={{fontSize: 12, color:'#023a6d',opacity:0.53, paddingRight: 3, paddingTop:4}}>$</Text><Text style={{color:'#023a6d', fontSize: 24,width:75,}}>{'5K'}</Text>
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
    flexDirection:'row',
    marginTop: 30,
  },
  subcontainer1: {
    marginBottom: 10,
    flexDirection:'row',
    marginTop: 10,
  },
  conwidth: {
    width: 300,
  },
  text1: {
    paddingTop: 15,
    paddingLeft: 15,
    fontSize: 14,
  fontFamily: 'Roboto-Regular',
  color: '#48a7ff'
},
text2: {
  paddingTop: 10,
  paddingLeft: 15,
  fontSize: 14,
fontFamily: 'Roboto-Regular',
color: '#939393'
},
wraptext: {
  paddingTop: 15,
  paddingLeft: 15,
  paddingRight: 0,
  marginRight: 0,
 borderRadius:4,
  flexDirection:'row',
backgroundColor:'#dfe9f1',
}
})

export default Purchases;
