//in this app you can enter value in two fields and that will be persisted even you restart the app

var React = require('react-native');

var {
  StyleSheet,
  AppRegistry,
  Text,
  View,
  TextInput,
  AsyncStorage,
  TouchableHighlight,
  ScrollView,
} = React;

//calling all the required files
var StringConstants = require("./config");
//I have created Transaction class to store the array of values that i will be using.
var Transaction1 = require("./transaction");
var styles = require("./styles")

var PersistData = React.createClass({

  //the
  transaction:"",
  initTransactionsCalledOnce:false,

  componentDidMount() {

    //this where i need to load the data from disk.
    AsyncStorage.getItem(StringConstants.TRANSACTION_ARRAY)
    .then((tranasctions) => {this.initTransactions(tranasctions)})
    .catch((error) =>{console.log("error2 " + error);
      this.initTransactions(null)});


    },

    //here i am passing the value that is being retrieved from the local storage if no value is retrieved undefined will be passed and new object will be created
    initTransactions:function(value)
    {
      if (!this.initTransactionsCalledOnce) {
        this.initTransactionsCalledOnce = true;
        this.transaction = new Transaction1(value);
        this.setState({transaction:this.transaction});
      }
    },

    getInitialState:function() {
      return {
        //this is the value for the field 1
        expenseName:"",
        //this is value for the field 2
        value:"",
      };
    },

    render:function() {
      return <View style = {styles.container}>
        {this.renderSaveView()}
        {this.renderListView()}
      </View>
    },
    renderSaveView:function() {
      return <View style = {[styles.saveView, this.border("yellow")]}>

        <View style = {[styles.textInputView, this.border("brown")]}>
          <TextInput style={[styles.textInput, this.border("black")]} placeholder="Expense Name" autoCapitalize = 'words' onChangeText={(text)=>this.setState({expenseName:text})} ref = {(component) => {this._expenseNameTextInput = component}}/>
          <TextInput style = {[styles.textInput, this.border("black")]} placeholder="Value" onChangeText={(text)=>this.setState({value:text})} keyboardType="decimal-pad" ref = {(component) => {this._valueTextInput = component}}/>
        </View>

        <TouchableHighlight style = {[styles.saveButton, this.border("green")]} underlayColor = "darkgreen" onPress={this.handleSavePress}>
          <Text style = {styles.saveButtonText}>
            Save
          </Text>
        </TouchableHighlight>

      </View>
    },
    clearText:function()
    {

      if (this._expenseNameTextInput && this._valueTextInput) {
        this._expenseNameTextInput.setNativeProps({text:""});
        this._valueTextInput.setNativeProps({text:""});
      } else {
        console.log("Error while clearing text");
      }
    },
    handleSavePress:function() {
      if (this.state.expenseName === "" || this.state.value === "") {
        //if any of the field is empty you can show a message or dialog or something
      } else {
        this.transaction.putNewTransaction(this.state.expenseName, this.state.value);
        this.setState({transaction:this.transaction});
        // AsyncStorage.setItem()

        AsyncStorage.setItem(StringConstants.TRANSACTION_ARRAY, JSON.stringify(this.transaction.getTransactionArray()));
        this.clearText();
      }


    },

    renderListView:function() {
      return <ScrollView
        style = {styles.listViewStyle}>
        {this.renderExpenseList()}
      </ScrollView>
    },
    renderExpenseList:function() {

      if (this.state.transaction === undefined){
        return;
      }

      if (this.state.transaction.getTransactionArray()) {
        var tempArray = this.state.transaction.getTransactionArray();
        return tempArray.map(function(transactionItem, index) {
          console.log("printing while looping in renderList " + transactionItem.name);
          return <View style={styles.listRow}>
            <Text style = {styles.listColumn}>
              index #{index}
            </Text>
            <Text style = {styles.listColumn}>
              {transactionItem.name}
            </Text>
            <Text style = {styles.listColumn}>
              {transactionItem.value}
            </Text>
          </View>
        });
      }
    },

    textChanged:function(text)
    {
      console.log(`hello here ${text} ${text.length}`);
      if (text.length === 0) {
        text = StringConstants.EMPTY_INPUT_TEXT;
      }

      this.setState({inputtext:text});
      AsyncStorage.setItem(StringConstants.KEY, JSON.stringify([{hello:'world'},'2','3']));

    },

    border:function(color)
    {
      return {
        borderColor: color,
        borderWidth: 1
      };
    },
  });


AppRegistry.registerComponent('PersistData', ()=>PersistData);


