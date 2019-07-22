import React, {Component} from 'react';
import { Dimensions, Animated, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import styles from './../css/styles'
import { Input,Button } from 'react-native-elements';


class Login extends Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount(){
  setTimeout(() => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }, 500)
  }

render() {
  let { fadeAnim } = this.state;
return(
  <Animated.View                 // Special animatable View
        style={{
          opacity: fadeAnim,         // Bind opacity to animated value
        }}>
        <View style={stylez.loginHeaderContainer}>
  <View style={stylez.loginHeaderContainer}>
    <View style={stylez.loginHeader}>
      <Image source={require('./../images/citilogov1.png')} style={stylez.loginHeaderLogo} />
    </View>

    <View style={stylez.loginHeaderUsername}>
      <Input
      inputContainerStyle={{ paddingLeft:10, borderWidth: 1, width: 230, borderRadius: 4,
borderColor: '#b5b5b5'}}
             style={stylez.loginHeaderLoginInput}
             placeholder=''
         />
         <Text style={stylez.loginHeaderLabel}>Username</Text>
    </View>
    <View style={stylez.loginHeaderPassword}>
      <Input
      fontFamily="Roboto-Regular"
             inputContainerStyle={{ paddingLeft:10, borderWidth: 1, width: 230, borderRadius: 4,
  borderColor: '#b5b5b5',}}
             style={stylez.loginHeaderLoginInput}
             placeholder=''
              secureTextEntry={true}
         />
         <Text style={stylez.loginHeaderLabel}>Password</Text>
    </View>
    <View style={stylez.loginHeaderLoginButton}>
    <Button
  title="Log In"
  fontFamily="Roboto-Regular"
  letterSpacing="1"
  buttonStyle={{
    width: 103.5,
      height: 45,
      borderRadius: 4,
      backgroundColor: '#012c63',
    width: 103,  }}
  />

    </View>
    <View style={stylez.loginHeaderHappyGraphicContainer}>
    <Image source={require('./../images/happygraphic.png')} style={stylez.loginHeaderHappyGraphic} />

    </View>
    <View style={stylez.loginHeaderActivate}>
    <Text style={stylez.loginHeaderLabelBottom}>Activate this device</Text>
    </View>
    <View style={stylez.loginHeaderShow}>
    <Text style={stylez.loginHeaderLabelBottom}>Show the nearest bank</Text>
    </View>
  </View>
  </View>
    </Animated.View>

)
}
}
const stylez = StyleSheet.create({
  loginHeaderContainer:{
    flex: 1,

    alignItems:'center',
    marginTop:'10%',
  },
  loginHeader: {
flexDirection: 'row',
  },

  loginHeaderLogo: {
width:150,
height:98,
  },

  loginHeaderUsername: {
    marginTop: 65,
    justifyContent: 'flex-start',
  },
  loginHeaderLabel :{
    width: 230,
    marginLeft: 10,
    marginTop: 8,
    fontFamily: 'Roboto-Regular',
  fontSize: 14,
  letterSpacing: 1,
  color: '#939393',
  },
  loginHeaderPassword: {
    marginTop: 47,
  },

  loginHeaderLoginButton: {
    width:230,
    alignItems: 'flex-end',
    marginLeft: 5,
    fontFamily: 'Roboto-Regular',
 fontSize: 14,
  },
  loginHeaderHappyGraphicContainer: {
    marginTop:60,
  },
  loginHeaderHappyGraphic: {
    width:75,
    height:75,
    marginBottom: 80,
  },

  loginHeaderActivate: {

  },

  loginHeaderShow: {
    marginTop: 15,
  },
  loginHeaderLabelBottom: {
    width: 230,
    marginLeft: 10,
    marginTop: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#48a7ff',
  },
  loginHeaderLoginInput :{
    width: 220,
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
  fontSize: 14,
  color: '#939393',
  },
})


export default Login;
