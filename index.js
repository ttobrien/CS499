import React from 'react';
import {
  asset,
  AppRegistry,
  Enviroment,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

const comments = [
"Initial state.", 
"Stack grows backwards, so appt is put at the end of the stack.",
"Each character is 1 byte in a c-string. ",
"An integer is 4 bytes. That is why i gets 4 boxes.",
"j is declared in the for loop. It is still stored in the stack, but its scope is only in this for loop.",
"The length of newDay is 6 because it is the number of characters before the end-of-string character. The computer resolves strlen(newDay) the first time the condition is checked to the interger value of 6.",
"Letter at newDay[0] replaces letter at appt[0]",
"post-incrementation on i",
"j is incremnted by for loop",

];

const strlen1 = [
"strlen(newDay)",
"6",
];

const strlen2 = [
"strlen(newTime)",
"3",
];

export class Code extends React.Component {
state = {
  counter: 0,
  i: 0,
  j: 0,
  k: 0,
  sl1Cntr: 0,
};

_next= () => {
  this.setState({counter: this.state.counter + 1});

  if((this.state.counter + 1) <= 4) {
	this.setState({sl1Cntr: 0});
  } else {
	this.setState({sl1Cntr: 1});
  }

  if((this.state.counter + 1) <= 6) {
	this.setState({i: 0});
  } else if((this.state.counter + 1) <= 10) {
	this.setState({i: 1});
  }
  
  if((this.state.counter + 1) <= 7) {
	this.setState({j: 0});
  } else if((this.state.counter + 1) <= 10) {
	this.setState({j: 1});
  }
};  

_prev = () => {
  this.setState({counter: this.state.counter - 1});

  if((this.state.counter - 1) <= 4) {
	this.setState({sl1Cntr: 0});
  } else {
	this.setState({sl1Cntr: 1});
  }

  if((this.state.counter - 1) <= 6) {
	this.setState({i: 0});
  } else if((this.state.counter - 1) <= 10) {
	this.setState({1: 1});
  }

  if((this.state.counter - 1) <= 7) {
	this.setState({j: 0});
  } else if((this.state.counter - 1) <= 10) {
	this.setState({j: 1});
  }
};  

render() {
    return (
<View style={styles.panel}>
	<View style = {styles.greetingBox}>
	  <Text style={styles.greeting}>
	    Box2
	  </Text>
	</View>
</View>
      
    );
  }
};


export class Comment extends React.Component {
state = {
  counter: 0,
  i: 0,
  j: 0,
  k: 0,
  sl1Cntr: 0,
};

_next= () => {
  this.setState({counter: this.state.counter + 1});

  if((this.state.counter + 1) <= 4) {
	this.setState({sl1Cntr: 0});
  } else {
	this.setState({sl1Cntr: 1});
  }

  if((this.state.counter + 1) <= 6) {
	this.setState({i: 0});
  } else if((this.state.counter + 1) <= 10) {
	this.setState({i: 1});
  }
  
  if((this.state.counter + 1) <= 7) {
	this.setState({j: 0});
  } else if((this.state.counter + 1) <= 10) {
	this.setState({j: 1});
  }
};  

_prev = () => {
  this.setState({counter: this.state.counter - 1});

  if((this.state.counter - 1) <= 4) {
	this.setState({sl1Cntr: 0});
  } else {
	this.setState({sl1Cntr: 1});
  }

  if((this.state.counter - 1) <= 6) {
	this.setState({i: 0});
  } else if((this.state.counter - 1) <= 10) {
	this.setState({1: 1});
  }

  if((this.state.counter - 1) <= 7) {
	this.setState({j: 0});
  } else if((this.state.counter - 1) <= 10) {
	this.setState({j: 1});
  }
};  

render() {
    return (

<View style={styles.panel}>
	<View style = {styles.greetingBox}>
	  <Text style={styles.greeting}>
	    Box2
	  </Text>
	</View>
</View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 500,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 2.5,
    backgroundColor: '#000000',
    borderColor: '#639dda',
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Comment', () => Comment);
AppRegistry.registerComponent('Code', () => Code);
