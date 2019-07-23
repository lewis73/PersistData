import React, {Component} from 'react';
import { ImageBackground, Dimensions, Animated, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './../css/styles'
import BotTalks from './botquestions/BotTalks'
import BotTalksBottom from './botquestions/BotTalksBottom'
import UserTalks from './userquestions/UserTalks'
import Video from 'react-native-video';
import Alerts from './pages/Alerts'
import Purchases from './pages/Purchases'
import Insights from './pages/Insights'
import InvestmentPositions from './pages/InvestmentPositions'
import Balance from './pages/Balance'
import { Input,Button } from 'react-native-elements';
import Voice from 'react-native-voice';
let width = Dimensions.get('screen').width;
let height = Dimensions.get('screen').height;

class Interaction extends Component {
  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }

  state = {
    fadeAnim: new Animated.Value(0),
    arr:[],
    paddingAnimation: new Animated.Value(20),
    animation:new Animated.Value(20),
    videoanimation:new Animated.Value(0),
    videoanimationposition:new Animated.Value(260),
    talking: false,
  }

  animate(){
    let {paddingAnimation} = this.state;
    Animated.timing( paddingAnimation, { toValue: 1000, duration: 10000}).start();
}

  formatAMPM() {
 let d = new Date(),
     minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
     hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
     ampm = d.getHours() >= 12 ? 'PM' : 'AM',
     hourz = hours % 12,
   hourss = hourz ? hourz : 12,
     months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
     days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 return days[d.getDay()]+' '+hourss+':'+minutes+ampm;
 }


 onPress = () => {
   if(!this.state.talking){
     this.state.talking = true
     Animated.timing(this.state.videoanimationposition, {
         toValue: 0,
         duration: 0
     }).start()
     Animated.timing(this.state.animation, {
         toValue: -280,
         duration: 300
     }).start(() =>  Animated.timing(this.state.videoanimation, {
          toValue: 1,
          duration: 300
      }).start())
      return;
    }
    if(this.state.talking){
      this.state.talking = false
      Animated.timing(this.state.videoanimationposition, {
          toValue: 260,
          duration: 0
      }).start()
      Animated.timing(this.state.videoanimation, {
          toValue: 0,
          duration: 300
      }).start()
      Animated.timing(this.state.animation, {
           toValue: 20,
           duration: 300
       }).start()
       return;
     }
 }

  componentDidMount(){
    Animated.timing( this.state.paddingAnimation, { toValue: 100, duration: 1000}).start();
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

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = e => {
    // eslint-disable-next-line
    console.log('onSpeechStart: ', e);
    this.setState({
      started: '√',
    });
  };

  animateMic = function(options) {
    let {paddingAnimation} = this.state;
   return {
     alignItems:'center',
     justifyContent:'center',
     marginLeft: 10,
     height:43,
     width:43,
     borderRadius: 25,
     marginLeft: 3,
     marginTop: -3,
     backgroundColor: '#007aeb',
     zIndex:2
   }
 }


render() {
  let { fadeAnim } = this.state;
return(
  <Animated.View                 // Special animatable View
        style={{
          opacity: fadeAnim,         // Bind opacity to animated value
        }}>
        <View style={{backgroundColor:'#f4f6f8', height: height - 121,borderBottomColor: '#cccccc',
      borderBottomWidth: 1,}}>
        <View style={{backgroundColor:'#f4f6f8',}}><ImageBackground source={require('./../images/header111.png')} style={{width: width, height: 232}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <View style={{marginTop: 120, marginLeft: 55, zIndex: 1}}><Image style={{width:57,height:27}} source={require('./../images/arrowLeft.png')} /></View>
    <View style={{marginTop:120, marginRight: 55,}}><Image style={{height:40,width:40}} source={require('./../images/menu.png')} /></View>
    </View>

  </ImageBackground>
  </View>
  <View style={{marginTop:-40,flexDirection:'row',justifyContent:'center',}}>
    <View style={{marginTop: -99, marginRight: 0, width: 88,  backgroundColor: '#012c63',height: 88, borderRadius:66,}}><Image style={{marginTop:22, marginLeft:21, height:44,width:44}} source={require('./../images/questionit.png')} /></View>
    </View>
        <View style={{marginTop:40,flexDirection:'row',justifyContent:'center',}}>
          <Text style={stylez.titleDate}>{this.formatAMPM()}</Text>
          </View>
<ScrollView style={{backgroundColor:'#f4f6f8',}}>
<View style={{paddingLeft: 20,paddingRight: 20,paddingTop:25,}}>
<UserTalks talkmyself='What is my balance?' />


</View>
</ScrollView>

<View style={stylez.subfooter}>
</View>

            <View style={stylez.footer}>
            <View style={{ width:4, height:43,
          borderRadius: 4, opacity:1, marginTop:-2,
          zindex:1}}>
              <Image source={require('./../images/inputimage1.png')} style={{
            borderRadius: 4, opacity:0.7, marginLeft: 0,}} />
            </View>
            <View style={{width: 250, zindex:-1,}}>
             <Input

                    placeholderTextColor='#b5b5b5'
                    inputStyle={{ paddingLeft: 15, fontSize:14,backgroundColor: '#f4f6f8'}}
                    inputContainerStyle={{ borderBottomWidth: 0, width: 250, marginLeft:-10, borderRadius: 4,
                    }}
                    placeholder='Type or ask your question...'
                />
                </View>
                <Animated.View style={{
                  opacity: this.state.videoanimation,
                  position: 'absolute',
                  bottom:50,
                  zIndex:0,
                  left: this.state.videoanimationposition,         // Bind opacity to animated value
                }}>
                <Video
              source={require('./SoundWaveAlphaMatteVidevo5.mp4')}
              rate={1.0}
              volume={1.0}
              muted={false}
              opacity={1}
              resizeMode={"cover"}
              repeat
              style={stylez.video}
            /></Animated.View>
            <TouchableOpacity onPress={this.onPress}>
            <Animated.View style={{
              alignItems:'center',
             justifyContent:'center',
             marginLeft: 10,
             height:43,
             width:43,
             borderRadius: 25,
             marginLeft: this.state.animation,
             marginTop: -3,
             backgroundColor: '#007aeb',
             zIndex:2}}>
            <Image source={require('./../images/button1.png')} style={{
              width:30,height:30,
              marginTop:0,
            borderRadius: 4,  marginRight:-1}} />
            </Animated.View>
            </TouchableOpacity>
            </View>
        </View>

    </Animated.View>

)
}
}

const stylez = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#f4f6f8',

    },
    titleWrapper: {

    },
    videowrapper:{
      position: 'absolute',
      bottom:48,
      zIndex:0,
      left: 0,
    },
    video:{
      height:40,
      width: 260,
      opacity:0.5,
      borderRadius: 5,
    },
    inputWrapper: {

    },
    contentContainer: {
      height:height - 111,
        backgroundColor: '#f4f6f8',
        flex: 1 // pushes the footer to the end of the screen
    },
    titleDate: {
      fontFamily: 'Roboto-Regular',
      fontSize: 14,
      color: '#939393',
      },
      subfooter: {
        marginTop: -20,
        paddingLeft: 20,
        flexDirection:'row',
        position: 'absolute',
      height: 45,
      left: 0,
      flexDirection:'row',
      top: height - 166,
          width:width,
      },
    footer: {
      position: 'absolute',
      height: 121,
      left: 260,
      flexDirection:'row',
      top: height - 121,
      paddingTop: 31,
      backgroundColor:'#ffffff',
      width:width,
    }
})


export default Interaction;
