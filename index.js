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

import { connect, changeState} from './store'

const comments = [
"Initial state.", 
"Stack grows backwards, so appt is put at\nthe end of the stack.",
"Each character is 1 byte in a c-string.",
"newTime added to stack",
"An integer is 4 bytes. That is why i gets\n4 boxes.",
"j is declared in the for loop. It is still\nstored in the stack, but its scope \nis only in this for loop.",
"The length of newDay is 6 because it is\nthe number of characters before the \nend-of-string character. The computer resolves \nstrlen(newDay) the first time the condition is checked \nto the interger value of 6.",
"Letter at newDay[0] replaces letter at appt[0]",
"post-incrementation on i",
"j is incremnted by for loop",

];

const data = [
"----------------------------------------",
"/mp-yadsendeW---------------------------",
"/mp-yadsendeW/yadnoM--------------------",
"/mp-yadsendeW/yadnoM/mp8----------------",
"/mp-yadsendeW/yadnoM/mp80000------------",
"/mp-yadsendeW/yadnoM/mp800000000--------",
"/mp-yadsendeW/yadnoM/mp800000000--------",
"/mp-yadsendeM/yadnoM/mp800000000--------",
"/mp-yadsendeM/yadnoM/mp810000000--------",
"/mp-yadsendeM/yadnoM/mp810001000--------",

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
	render() {
	    return (
	 
			<View style = {styles.greetingBox1}>
		          <Text style={styles.greeting}>
		            {'char appt[] = "Wednesday 4pm";'}
		          </Text>
			  <Text style={styles.greeting}>
		            {'char newDay[] = "Monday";'}
		          </Text>
			  <Text style={styles.greeting}>
		            {'char newTime[] = "8pm";'}
		          </Text>
			  <Text style={styles.greeting}>
		            {`int i = 0;`}
		          </Text>
			  <Text style={styles.greeting}>
		            {`for (int j = 0; j < ${strlen1[`${this.props.sl1Cntr}`]}; j++)`}
		          </Text>
			  <Text style={styles.greeting}>
		            {'appt[i++] = newDay[j];'}
		          </Text>
			  <Text style={styles.greeting}>
		            {'for (int k = 0; k < strlen(newTime); k++)'}
		          </Text>
			  <Text style={styles.greeting}>
		              {'appt[i++] = newTime[k];'}
			  </Text>
			  <Text style={styles.greeting}>
		            {'printf("%s\\n", appt);'}
		       </Text>
		    </View>    
	    );
	}
};


export class Comment extends React.Component {

render() {
    return (
		<View style = {styles.greetingBox1}>
	          <Text style={styles.greeting}>
		    {`Comments: ${comments[`${this.props.counter}`]}`}
		  </Text>
		</View>
    );
  }
};

export class Control extends React.Component {

	_next= () => {
		changeState(1);
	};  

	_prev = () => {
		changeState(0);
	}; 

	render() {
	    return (
	    	<View style = {styles.panel2}>
				<VrButton
				  onClick = {this._next}
				  style = {styles.greetingBox2}>
			        <Text style={styles.greeting}>
				    	Next
				  	</Text>
				</VrButton>
				<VrButton
				  onClick = {this._prev}
				  style = {styles.greetingBox2}>
			        <Text style={styles.greeting}>
				    	Back
				  </Text>
				</VrButton>
			</View>
	    );
	}
};

export class Stack extends React.Component {

render() {
    return (
      <View style={styles.panel3}>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][0]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][1]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][2]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][3]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][4]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][5]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][6]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][7]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][8]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][9]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][10]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][11]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][12]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][13]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][14]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][15]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][16]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][17]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][18]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][19]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][20]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][21]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][22]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][23]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][24]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][25]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][26]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][27]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][28]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][29]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][30]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][31]}`}
	        </Text>
		</View>
		<View style = {styles.greetingBox2}>
		    <Text style={styles.greeting}>
	            {`${data[`${this.props.counter}`][32]}`}
	        </Text>
		</View>
      </View>
    );
  }
};

const ConnectedCode = connect(Code);
const ConnectedComment = connect(Comment);
const ConnectedControl = connect(Control);
const ConnectedStack = connect(Stack);


const styles = StyleSheet.create({
  panel1: {
    // Fill the entire surface
    width: 400,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel2: {
    // Fill the entire surface
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel3: {
    width: 1000,
    height: 300,
    display: 'flex',
    flexDirection: 'row-reverse',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',

  },
  greetingBox1: {
    padding: 2.5,
    backgroundColor: '#000000',
    borderColor: '#639dda',
  },
  greetingBox2: {
    padding: 2,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#639dda',
  },
  greeting: {
    fontSize: 30,
  },

});

AppRegistry.registerComponent('ConnectedComment', () => ConnectedComment);
AppRegistry.registerComponent('ConnectedCode', () => ConnectedCode);
AppRegistry.registerComponent('ConnectedControl', () => ConnectedControl);
AppRegistry.registerComponent('ConnectedStack', () => ConnectedStack);
