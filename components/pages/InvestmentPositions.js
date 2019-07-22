import React, {Component} from 'react';
import { Animated, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import styles from './../../css/styles'

class InvestmentPositions extends Component {
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
          fontSize: 14,color:'#023a6d', marginBottom: 0}}>YOUR HOLDINGS</Text>
          </View>
        </View>

        <View style={styles.subcontainer}>
          <View>
            <View style={{flexDirection:'row'}}><Text style={{fontSize: 12,fontFamily: 'Roboto-Regular',color:'#023a6d', paddingTop:10, paddingRight: 25, width:120,}}>1. AMAZON</Text><Text style={{fontSize: 12, color:'#023a6d',opacity:0.53, paddingRight: 3, paddingTop:8}}>$</Text><Text style={{color:'#023a6d', fontSize: 36,width:120,}}>{'23,000'}</Text><Text style={{fontSize: 18, color:'#023a6d',opacity:0.53, paddingLeft: 3, paddingTop:8}}>.00</Text>
            <View style={{borderRadius: 5,backgroundColor: '#2ba021', marginLeft: 23, height: 18, paddingLeft:4, paddingTop:4,  paddingLeft:3, width:48, marginTop:10, flexDirection:'row'}}><Image source={require('./../../images/sharp_expand_more_white_18pt_3xv.png')} style={{
          borderRadius: 4, width:15,height:10,}} /><Text style={{fontSize: 12,fontFamily: 'Roboto-Regular', color: 'white', marginLeft: 3, marginTop: -2,}}>{'+4%'}</Text></View>
            </View>


            <View style={{flexDirection:'row'}}><Text style={{fontSize: 12,fontFamily: 'Roboto-Regular',color:'#023a6d', paddingTop:10, paddingRight: 25, width:120,}}>2. ORACLE</Text><Text style={{fontSize: 12, color:'#023a6d',opacity:0.53, paddingRight: 3, paddingTop:8}}>$</Text><Text style={{color:'#023a6d', fontSize: 36,width:120,}}>{'89,000'}</Text><Text style={{fontSize: 18, color:'#023a6d',opacity:0.53, paddingLeft: 3, paddingTop:8}}>.00</Text>
              <View style={{borderRadius: 5,backgroundColor: '#2ba021', marginLeft: 23, height: 18, paddingLeft:4, paddingTop:4,  paddingLeft:3, width:48, marginTop:10, flexDirection:'row'}}><Image source={require('./../../images/sharp_expand_more_white_18pt_3xv.png')} style={{
            borderRadius: 4, width:15,height:10,}} /><Text style={{fontSize: 12,fontFamily: 'Roboto-Regular', color: 'white', marginLeft: 3, marginTop: -2,}}>{'+2%'}</Text></View>
            </View>


            <View style={{flexDirection:'row'}}><Text style={{fontSize: 12,fontFamily: 'Roboto-Regular',color:'#023a6d', paddingTop:10, paddingRight: 25, width:120,}}>3. GOOGLE</Text><Text style={{fontSize: 12, color:'#023a6d',opacity:0.53, paddingRight: 3, paddingTop:8}}>$</Text><Text style={{color:'#023a6d', fontSize: 36,width:115,}}>{'17,000'}</Text><Text style={{fontSize: 18, color:'#023a6d',opacity:0.53, paddingLeft: 0, paddingTop:8,marginRight: 10,}}>.15</Text>
              <View style={{borderRadius: 5,backgroundColor: '#2ba021', marginLeft: 23, height: 18, paddingLeft:4, paddingTop:4,  paddingLeft:3, width:48, marginTop:10, flexDirection:'row'}}><Image source={require('./../../images/sharp_expand_more_white_18pt_3xv.png')} style={{
            borderRadius: 4, width:15,height:10,}} /><Text style={{fontSize: 12,fontFamily: 'Roboto-Regular', color: 'white', marginLeft: 3, marginTop: -2,}}>{'+1%'}</Text></View>
            </View>

            <View style={{flexDirection:'row', marginTop:23, marginBottom:34}}>
            <View style={styles.seeDetails1}><Text style={{color:'#007aeb'}}>{'See 5 More top'}</Text>
            </View>
            <View  style={styles.seeDetails}><Text style={{color:'#007aeb'}}>{'Buy/Sell'}</Text>
            </View>
            </View>

          </View>
        </View>
        <View style={styles.subcontainer}>
          <View>
            <View style={{flexDirection:'row'}}><Text style={{fontSize: 12,fontFamily: 'Roboto-Regular',color:'#023a6d', paddingTop:10, paddingRight: 25, width:120,}}>17. AMAZON</Text><Text style={{fontSize: 12, color:'#023a6d',opacity:0.53, paddingRight: 3, paddingTop:8}}>$</Text><Text style={{color:'#023a6d', fontSize: 36,width:95,}}>{'2,013'}</Text><Text style={{fontSize: 18, color:'#023a6d',opacity:0.53, paddingRight: 28, paddingTop:8}}>.00</Text>
              <View style={{borderRadius: 5,backgroundColor: '#ca171a', marginLeft: 23, height: 18, paddingLeft:4, paddingTop:4,  paddingLeft:3, width:48, marginTop:10, flexDirection:'row'}}><Image source={require('./../../images/sharp_expand_more_white_18pt_3x.png')} style={{
            borderRadius: 4, width:15,height:10,}} /><Text style={{fontSize: 12,fontFamily: 'Roboto-Regular', color: 'white', marginLeft: 3, marginTop: -2,}}>{'-1%'}</Text></View>
            </View>


            <View style={{flexDirection:'row'}}><Text style={{fontSize: 12,fontFamily: 'Roboto-Regular',color:'#023a6d', paddingTop:10, paddingRight: 25, width:120,}}>18. ORACLE</Text><Text style={{fontSize: 12, color:'#023a6d',opacity:0.53, paddingRight: 3, paddingTop:8}}>$</Text><Text style={{color:'#023a6d', fontSize: 36,width:120,}}>{'12,060'}</Text><Text style={{fontSize: 18, color:'#023a6d',opacity:0.53, paddingLeft: 3, paddingTop:8}}>.95</Text>
              <View style={{borderRadius: 5,backgroundColor: '#ca171a', marginLeft: 23, height: 18, paddingLeft:4, paddingTop:4,  paddingLeft:3, width:48, marginTop:10, flexDirection:'row'}}><Image source={require('./../../images/sharp_expand_more_white_18pt_3x.png')} style={{
            borderRadius: 4, width:15,height:10,}} /><Text style={{fontSize: 12,fontFamily: 'Roboto-Regular', color: 'white', marginLeft: 3, marginTop: -2,}}>{'-2%'}</Text></View>
            </View>


            <View style={{flexDirection:'row'}}><Text style={{fontSize: 12,fontFamily: 'Roboto-Regular',color:'#023a6d', paddingTop:10, width:120,}}>19. GOOGLE</Text><Text style={{fontSize: 12, color:'#023a6d',opacity:0.53, paddingRight: 3, paddingTop:8}}>$</Text><Text style={{color:'#023a6d', fontSize: 36,width:100,}}>{'7,230'}</Text><Text style={{fontSize: 18, color:'#023a6d',opacity:0.53, paddingRight: 15, paddingTop:8,marginRight: 8,}}>.95</Text>
              <View style={{borderRadius: 5,backgroundColor: '#ca171a', marginLeft: 23, height: 18, paddingLeft:4, paddingTop:4,  paddingLeft:3, width:48, marginTop:10, flexDirection:'row'}}><Image source={require('./../../images/sharp_expand_more_white_18pt_3x.png')} style={{
            borderRadius: 4, width:15,height:10,}} /><Text style={{fontSize: 12,fontFamily: 'Roboto-Regular', color: 'white', marginLeft: 3, marginTop: -2,}}>{'-2%'}</Text></View>
            </View>

            <View style={{flexDirection:'row', marginTop:23, marginBottom:34}}>
            <View style={styles.seeDetails1}><Text style={{color:'#007aeb'}}>{'See 5 More bottom'}</Text>
            </View>
            <View  style={styles.seeDetails}><Text style={{color:'#007aeb'}}>{'Buy/Sell'}</Text>
            </View>
            </View>

          </View>
        </View>

    </Animated.View>
</View>

)
}
}

export default InvestmentPositions;
