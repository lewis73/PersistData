
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  linearGradient: {
  flex: 1,

  //borderRadius: 5
},
buttonText: {
  fontSize: 18,
  fontFamily: 'Gill Sans',
  textAlign: 'center',
  margin: 10,
  color: '#ffffff',
  backgroundColor: 'rgb(0, 74, 149)',
},
  button: {
    width: 30,
    height: 30,
  },
  container: {
    paddingLeft:15,
        height: 45,
  },
  containerName: {
    alignItems: 'center',
        height: 45,

  },
  containerNameTop: {
paddingLeft: 15,
        height: 45,
  },
  containerNames: {
    alignItems: 'center',
        paddingTop:20,
        paddingBottom:20,
  },
  subcontainer: {
    flex: 1,
    flexDirection:'row',
      marginLeft: 15,
        marginRight: 15,
        marginTop:10,
  },
  subcontainerHorizontal: {
    flex: 1,
    flexDirection:'row',
    flexWrap:'nowrap',
      marginLeft: 15,
        marginRight: 15,
  },
  subcontainerHorizontalSub: {
    flexDirection:'row',
  },
  subcontainer1: {
    flex: 1,
    flexDirection:'row',
      marginLeft: 15,
        marginRight: 15,
        alignSelf: 'flex-end'
  },
  container1: {
  flexDirection: 'row',
    justifyContent: 'space-between',
marginTop:30,
height: 40,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    textAlign: 'center',
    color: '#ffffff',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  stat: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 1,
  },
  hamburger: {
    width: 14,
    // Without height undefined it won't work
    height: 10,
    marginLeft: 15,
    // figure out your image aspect ratio
    //aspectRatio: 397 / 256,
  },
  citilogo: {
    width: 39,
    height: 25,
    marginRight: 15,
    marginTop: -14,
    // Without height undefined it won't work
    //height: undefined,
    // figure out your image aspect ratio
    //aspectRatio: 101 / 65,
  },
  input: {
   margin:0,
    width: 250,
height: 43,
borderRadius: 4,
color:'#ffffff',
fontFamily: 'Roboto-Regular',
  fontSize: 14,
backgroundColor: '#003c8b',
opacity:0.38,
paddingHorizontal: 20
   },

titleName: {
  fontFamily: 'Roboto-Regular',
  fontSize: 18,
  color: '#ffffff',
  },
  titleDate: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#ffffff',
    opacity:0.5
    },
    titleDates: {
      fontFamily: 'Roboto-Regular',
      fontSize: 14,
      color: '#ffffff',
      opacity:0.5,

      },
botAnswer:{
  fontFamily: 'Roboto-Regular',
    fontSize: 16,
  height: 34,
  justifyContent: 'center',
  paddingLeft: 10,
  paddingRight: 10,
 borderRadius: 4,
 backgroundColor: '#007aeb',

},
lastSeen:{
   paddingLeft: 15,
 },
lastSeenBox:{
  fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color:'#023a6d',
  height: 34,
  justifyContent: 'center',
  paddingLeft: 10,
  paddingRight: 10,
  marginBottom: 11,
 borderRadius: 4,
 backgroundColor: '#839bb8',

},
seeMore: {
  marginLeft: 65,
},
seeMoreContainer: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#4e7ea9',
    paddingBottom: 15,
},
seeMoreContainerTitle: {
  fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: "#ffffff",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
},
seeMoreContainerDivider: {
  borderBottomWidth: 1,
  borderColor: '#4e7ea9',
},
seeMoreContainerEntries: {
  paddingTop: 15,
  paddingLeft: 15,
  paddingRight: 45,
  fontFamily: 'Roboto-Regular',
  fontSize: 12,
  color: "#007aeb",
},
seeDetails1: {
fontFamily: 'Roboto-Regular',
  fontSize: 14,
  fontWeight: '500',
  paddingLeft: 10,
  paddingRight: 10,
  justifyContent: 'center',
height: 38,
  borderRadius: 4,
  borderWidth: 1,
  borderColor: '#48a7ff',
  marginRight: 15
},
seeDetails: {
fontFamily: 'Roboto-Regular',
  fontSize: 14,
  fontWeight: '500',
  paddingLeft: 10,
  paddingRight: 10,
  justifyContent: 'center',
height: 38,
  borderRadius: 4,
  borderWidth: 1,
  borderColor: '#48a7ff'
},
personAnswer: {
  fontFamily: 'Roboto-Regular',
    fontSize: 16,
  height: 34,
  justifyContent: 'center',
  paddingLeft: 10,
  paddingRight: 10,
 borderRadius: 4,
    backgroundColor: '#ffffff'
  },
  contentContainer: {
    marginTop:0,
    paddingTop:0,
},
contentContainerOff: {
  height:0,
},
footer: {
   //boxShadow: 0 0 3px 0 rgba(0, 0, 0, 0.25);
backgroundColor: '#001d4d',
flex: 1,
justifyContent: 'flex-end',
},
  footerOriginal: {
    height: 111,

     //boxShadow: 0 0 3px 0 rgba(0, 0, 0, 0.25);
 backgroundColor: '#001d4d'
  }
});
