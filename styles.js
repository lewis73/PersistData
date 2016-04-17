var React = require("react-native");



var styles = React.StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    marginTop:20,

  },
  saveView: {
    flex:3,

  },
  listViewStyle: {
    flex:7,
  },
  textInput: {
    flex:1,
    margin:20,
    paddingRight: 3,
    textAlign:'center',
  },
  textInputView: {
    flex:2,
    flexDirection:'row'
  },
  saveButton: {
    flex:1,
    margin: 30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green',

  },
  saveButtonText: {
    color:'white',
    fontWeight:"800",
    fontSize:20,
  },
  listRow: {
    flex:1,
    justifyContent:'space-around',
    flexDirection:'row',
  },
  listColumn: {
    flex:1,
    fontSize:25,
  },

});


module.exports = styles;
