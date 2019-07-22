import React, {Component} from 'react';
import { Dimensions, Animated, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import styles from './../css/styles'
import { Input, Button, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
let width = Dimensions.get('screen').width;

class Dashboard extends Component {
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
        <View style={stylez.dashboardContainer}>

        <View style={stylez.dashboardHeader}>
          <View style={{marginLeft: 20,}}><TouchableHighlight  onPress={this.resetHome}><Image style={{height:30,width:46}} source={require('./../images/citilogov1.png')} /></TouchableHighlight></View>
          <View><Text style={stylez.dashboardHeaderText}>{'DASHBOARD'}</Text></View>
          <View style={{marginRight: 20,}}><TouchableHighlight onPress={this.start}><Image style={{height:25,width:25, marginTop:8,}} source={require('./../images/menu1.png')} /></TouchableHighlight></View>
          </View>


        <View style={stylez.dashboardLine}></View>
        <View style={stylez.dashboardAssetsContainer}><Text style={stylez.dashboardAssets}>{'TOTAL ASSETS'}</Text>{}</View>
        <View style={stylez.dashboardBalanceContainer}><Text style={{fontSize: 18, fontWeight: 'bold', color:'#012c63', paddingRight: 3, paddingTop:3}}>$</Text><Text style={stylez.dashboardBalance}>{'5,346,099'}</Text></View>
        <View style={stylez.dashboardRow1}>
          <LinearGradient colors={['#007afe', '#019bff', '#3db6ff']}  style={stylez.dashboardCircle1}>
            <View style={{marginTop:10,
                marginLeft:10,flexDirection:'row',}}><Image style={{height:25,width:25,opacity:0.7,}} source={require('./../images/baseline_account_balance_wallet_white_18pt_3x.png')} /></View>
              <View style={{marginTop:5,
                    marginLeft:10,flexDirection:'row',}}><Text style={{fontFamily: 'Roboto-Regular',fontSize: 16, color:'#ffffff', paddingRight: 3, paddingTop:3}}>$</Text><Text style={{fontFamily: 'Roboto-Regular',fontSize: 28,color: '#ffffff',}}>{'4M'}</Text></View>
                    <View style={{marginTop:5,
                          marginLeft:10,flexDirection:'row',}}><Text style={{fontWeight:'bold',fontFamily: 'Roboto-Regular',opacity:0.7, letterSpacing:1, fontSize: 16,color: '#ffffff',}}>{'6 Accounts'}</Text></View>

          </LinearGradient>
          <LinearGradient colors={['#00a500', '#009200', '#008c00']}  style={stylez.dashboardCircle2}>
            <View style={{marginTop:10,
                marginLeft:10,flexDirection:'row',justifyContent:'space-between'}}><Image style={{height:22,width:22,opacity:0.7,}} source={require('./../images/baseline_insert_chart_white_18dp.png')} /><Text style={{fontFamily: 'Roboto-Regular',fontSize: 14,color: '#ffffff',marginRight:10,}}
                >{'+ 2%'}</Text></View>
              <View style={{marginTop:5,
                    marginLeft:10,flexDirection:'row',}}><Text style={{fontFamily: 'Roboto-Regular',fontSize: 16, color:'#ffffff', paddingRight: 3, paddingTop:3}}>$</Text><Text style={{fontFamily: 'Roboto-Regular',fontSize: 28,color: '#ffffff',}}>{'976K'}</Text></View>
                    <View style={{marginTop:5,
                          marginLeft:10,flexDirection:'row',}}><Text style={{fontWeight:'bold',fontFamily: 'Roboto-Regular',opacity:0.7, letterSpacing:1, fontSize: 16,color: '#ffffff',}}>{'19 Stocks'}</Text></View>
          </LinearGradient>
        </View>
        <View style={stylez.dashboardRow2}>
          <LinearGradient colors={['#e4f2fe', '#e4f2fe', '#e4f2fe']}  style={stylez.dashboardCircle3}>
            <View style={{marginTop:10,
                marginLeft:10,flexDirection:'row',}}><Image style={{height:25,width:25,opacity:0.5,}} source={require('./../images/baseline_account_balance_black_18pt_3x.png')} /></View>
              <View style={{marginTop:5,
                    marginLeft:10,flexDirection:'row',}}><Text style={{fontFamily: 'Roboto-Regular',fontSize: 16, color:'#012c63', paddingRight: 3, paddingTop:3}}>$</Text><Text style={{fontFamily: 'Roboto-Regular',fontSize: 28,color: '#012c63',}}>{'459K'}</Text></View>
                    <View style={{marginTop:5,
                          marginLeft:10,flexDirection:'row',}}><Text style={{fontWeight:'bold',fontFamily: 'Roboto-Regular',opacity:0.5, letterSpacing:1, fontSize: 16,color: '#012c63',}}>{'4 Funds'}</Text></View>
          </LinearGradient>


    <LinearGradient colors={['#e4f2fe', '#e4f2fe', '#e4f2fe']}  style={stylez.dashboardCircle4}>
      <View style={{marginTop:10,
          marginLeft:10,flexDirection:'row',}}><Image style={{height:25,width:25, opacity:0.5,}} source={require('./../images/baseline_credit_card_black_18pt_3x.png')} /></View>
        <View style={{marginTop:5,
              marginLeft:10,flexDirection:'row',}}><Text style={{fontFamily: 'Roboto-Regular',fontSize: 16, color:'#012c63', paddingRight: 3, paddingTop:3}}>$</Text><Text style={{fontFamily: 'Roboto-Regular',fontSize: 28,color: '#012c63',}}>{'100K'}</Text></View>
              <View style={{marginTop:5,
                    marginLeft:10,flexDirection:'row',}}><Text style={{fontWeight:'bold',fontFamily: 'Roboto-Regular',opacity:0.5, letterSpacing:1, fontSize: 16,color: '#012c63',}}>{'Credit'}</Text></View>
    </LinearGradient>
      </View>
<View style={stylez.dashboardRow3}>
  <View style={{marginTop: -37, marginRight: -20, width: 66,  backgroundColor: '#012c63',height: 66, borderRadius:66,}}><Image style={{marginTop:17, marginLeft:15, height:34,width:34}} source={require('./../images/questionit.png')} /></View></View>

<View style={stylez.dashboardRow4}>
  <Text style={{ fontFamily:'Roboto-Regular',fontSize: 12,fontWeight: 'bold',letterSpacing: 2,color: '#939393'}}>{'INVESTMENTS'}</Text>
</View>
<View style={stylez.dashboardRow5}>
  <Text style={{ fontFamily:'Roboto-Regular',fontSize: 14,fontWeight: 'bold',letterSpacing: 2,color: '#023a6d',marginLeft:13,}}>{'ALL'}</Text><Text style={{ fontFamily:'Roboto-Regular',fontSize: 14,fontWeight: 'bold',letterSpacing: 2,color: '#48a7ff',marginLeft:13,}}>{'ORACLE'}</Text>
  <Text style={{ fontFamily:'Roboto-Regular',fontSize: 14,fontWeight: 'bold',letterSpacing: 2,color: '#48a7ff',marginLeft:13,}}>{'GOOGLE'}</Text>
  <Text style={{ fontFamily:'Roboto-Regular',fontSize: 14,fontWeight: 'bold',letterSpacing: 2,color: '#48a7ff',marginLeft:13,}}>{'AMAZON'}</Text>
</View>

<View style={stylez.dashboardRow6}>
  <View><Image style={{height:336,width:750}} source={require('./../images/graphy-750x366.png')} /></View></View>
  <View style={stylez.dashboardLine2}></View>
  <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:35,paddingRight:35, width:width,backgroundColor: '#f6f6f6', paddingTop: 18}}>
    <View style={{height:91,backgroundColor: '#f6f6f6',}}><Image style={{marginLeft: 1,height:25,width:25, opacity:0.5,}} source={require('./../images/sharp_view_quilt_black_18pt_3x2.png')} /><Text style={{fontFamily:'Roboto-Regular',fontSize: 11,color:'#007aeb',}}>{'Home'}</Text></View>
    <View style={{height:91,backgroundColor: '#f6f6f6',}}><Image style={{marginLeft: 3,height:25,width:25, opacity:0.5,}} source={require('./../images/sharp_history_black_18pt_3x.png')} /><Text style={{fontFamily:'Roboto-Regular',fontSize: 11,color:'#939393',}}>{'History'}</Text></View>
    <View style={{height:91,backgroundColor: '#f6f6f6',}}><Image style={{marginLeft: 16,height:25,width:25, opacity:0.5,}} source={require('./../images/sharp_bar_chart_black_18pt_3x.png')} /><Text style={{fontFamily:'Roboto-Regular',fontSize: 11,color:'#939393',}}>{'Investments'}</Text></View>
    <View style={{height:91,backgroundColor: '#f6f6f6',}}><Image style={{marginLeft: 2, height:25,width:25, opacity:0.5,}} source={require('./../images/baseline_mail_outline_black_18pt_3x.png')} /><Text style={{fontFamily:'Roboto-Regular',fontSize: 11,color:'#939393',}}>{'Chats'}</Text></View>
    <View style={{height:91,backgroundColor: '#f6f6f6',}}><Image style={{marginLeft: 2,height:25,width:25, opacity:0.5,}} source={require('./../images/baseline_credit_card_black_18pt_3x.png')} /><Text style={{fontFamily:'Roboto-Regular',fontSize: 11,color:'#939393',}}>{'Cards'}</Text></View>
  </View>
  </View>
    </Animated.View>

)
}
}
const stylez = StyleSheet.create({
  dashboardContainer:{
    flex: 1,

    alignItems:'center',
    marginTop:'5%',
  },
  dashboard: {
flexDirection: 'row',
  },
  dashboardHeader :{
    flexDirection: 'row',
    justifyContent:'space-between',
    width:width,
  },
  dashboardHeaderText :{
    fontFamily: 'Roboto-Medium',
  fontSize: 14,
  color: '#000000',
  letterSpacing: 2,
  marginTop:14,
  marginLeft: -12,
  },

  dashboardLine: {
    marginTop: 15,
    backgroundColor: '#e5e5e5',
    width: width,
    height: 1,
  },
  dashboardLine2: {
    marginTop: 15,
    backgroundColor: '#cccccc',
    width: width,
    height: 1,
  },
  dashboardAssetsContainer :{
    marginLeft: 10,
    marginTop: 28,
  },
  dashboardAssets :{
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
  fontSize: 14,
    height:20,
  color: '#939393',
  letterSpacing: 2,
  },
  dashboardBalanceContainer :{
    flexDirection:'row',
    marginTop: 8,
  },
  dashboardBalance :{
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
  fontSize: 32,
  color: '#012c63',
  height:40,
  marginBottom: 20,
  },
  dashboardCircle1: {
    width: 139,
height: 108.5,
borderRadius: 4,
marginRight: 7.5,
},
dashboardCircle2: {
  width: 139,
height: 108.5,
borderRadius: 4,
marginLeft: 7.5,
},
dashboardCircle3: {
  width: 139,
height: 108.5,
borderRadius: 4,
marginRight: 7.5,
marginTop: 16,
},
dashboardCircle4: {
  marginTop: 16,
  width: 139,
height: 108.5,
borderRadius: 4,
marginLeft: 7.5,
},
dashboardRow1: {
  flexDirection: 'row',
  width:'45%',
  justifyContent:'space-between',
  alignItems:'center',
},
dashboardRow2: {
  flexDirection: 'row',
  width:'45%',
  justifyContent:'space-between',
  alignItems:'center',
},
dashboardRow3: {
  flexDirection: 'row',
  width:'45%',
  justifyContent:'flex-end',
},
dashboardRow4: {
  flexDirection: 'row',
  width:'45%',
  justifyContent:'center',
},
dashboardRow5: {
  flexDirection: 'row',
  width:'55%',
  height:30,
  marginTop:30,
    marginBottom:30,
  justifyContent:'space-between',
},
dashboardRow6: {

  flexDirection: 'row',
  width:'100%',
  justifyContent:'center',
},
  dashboardLabel :{
    width: 230,
    marginLeft: 10,
    marginTop: 8,
    fontFamily: 'Roboto-Regular',
  fontSize: 14,
  color: '#939393',
  },
  dashboardPassword: {
    marginTop: 47,
  },

  dashboardLoginButton: {
    width:230,
    alignItems: 'flex-end',
    marginLeft: 5,
    fontFamily: 'Roboto-Regular',
 fontSize: 14,
  },
  dashboardHappyGraphicContainer: {
    marginTop:60,
  },
  dashboardHappyGraphic: {
    width:75,
    height:75,
    marginBottom: 80,
  },

  dashboardActivate: {

  },

  dashboardShow: {
    marginTop: 15,
  },
  dashboardLabelBottom: {
    width: 230,
    marginLeft: 10,
    marginTop: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#48a7ff',
  },
  dashboardLoginInput :{
    width: 220,
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
  fontSize: 14,
  color: '#939393',
  },
})


export default Dashboard;
