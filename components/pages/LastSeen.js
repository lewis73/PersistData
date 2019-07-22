import React, {Component} from 'react';
import { Dimensions, Animated, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import styles from './../../css/styles'

let height = Dimensions.get('window').height;
let heights = Math.round(height - 110);

class LastSeen extends Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
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
  lastSeenEntries = (lastSeenBlurbs) => {
    return lastSeenBlurbs.map(item =>{
        return (
          <View style={styles.subcontainerHorizontalSub} key={item.name}>
            <View style={styles.lastSeenBox}><Text style={{color:'#023a6d'}}>{item.name}</Text></View>
          </View>
        );
    })
  }

  seeMoreEntries = (lastSeenBlurbs) => {
    return lastSeenBlurbs.map(item =>{
        return (
          <View style={styles.subcontainerHorizontalSub} key={item.name}>
            <View><Text style={styles.seeMoreContainerEntries}>{item.name}</Text></View>
          </View>
        );
    })
  }

render() {
  let { fadeAnim } = this.state;
return(
  <View style={{ paddingBottom: 15}}>
  <View style={styles.containerNameTop}>
    <Text style={styles.titleName}>{'Welcome back, Mildred S Carter'}</Text>
    </View>
  <ScrollView showsHorizontalScrollIndicator={false} horizontal={this.props.horizontalScrollState}>
  <View style={{ flexWrap: 'nowrap', flexDirection:'row',}}>
    <View style={styles.lastSeen}>
      <View><Text style={{fontFamily: 'Roboto-Regular',
        fontSize: 14,color:'#ffffff', opacity: 0.53, marginBottom: 10}}>LAST SEEN</Text>
     </View>

       {this.lastSeenEntries(this.props.lastSeens)}
    </View>

    <View style={styles.seeMore}>
      <View style={{}}><Text style={{fontFamily: 'Roboto-Regular',
        fontSize: 14,color:'#ffffff', opacity: 0.53, marginBottom: 10}}>SEE MORE</Text>
        </View>

    <View style={{flexDirection:'row',}}>

      <View style={styles.seeMoreContainer}>
        <View><Text style={styles.seeMoreContainerTitle}>{'FUNDS & INVESTMENT'}</Text></View>
        <View style={styles.seeMoreContainerDivider}></View>
        {this.seeMoreEntries(this.props.seeMoreFunds)}
      </View>

      <View style={{ marginLeft: 18}}></View>

     <View style={styles.seeMoreContainer}>
        <View><Text style={styles.seeMoreContainerTitle}>{'Accounts'}</Text></View>
        <View style={styles.seeMoreContainerDivider}></View>
        {this.seeMoreEntries(this.props.seeMoreAccounts)}
      </View>

    </View>
    </View>
    </View>
  </ScrollView>

  <Animated.View                 // Special animatable View
        style={{
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
  <View style={ styles.containerNames}>
    <View><Text style={styles.titleDates}>{this.formatAMPM()}</Text>
    </View>
    </View>
  <View style={styles.subcontainer}>
    <View>
    <View style={styles.botAnswer}><Text style={{color:'#ffffff'}}>{'How can I help you?'}</Text>
    </View>
    <View><Text style={{fontFamily: 'Roboto-Regular',
      fontSize: 14,color:'#007aeb', marginTop: 5}}>Bot</Text></View>
    </View>
    </View>
    </Animated.View>
</View>

)
}
}

export default LastSeen;
