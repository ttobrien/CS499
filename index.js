//in react you can make your tags and use observer pattern
//DEFINE FRAGment component with defined series of ststes for highlighting

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
"Stack grows backwards, so appt is put\n at the end of the stack. Try\nclicking on the red appt button to see\nwhat happens.",
"Each character is 1 byte in a c-string.",
"newTime added to stack",
"An integer is 4 bytes. That is why i\ngets 4 boxes.",
"j is declared in the for loop. It is\nstill stored in the stack, but its\nscope is only in this for loop.",
"The length of newDay is 6 because it is\nthe number of characters before\nthe end-of-string character.The for\nloop continues because 0 < 6.",
"Character at newDay[0] replaces character\nat appt[0].",
"Post-incrementation on i",
"j is incremnted by for loop",
"The loop condition is rechecked. 1 < 6\nso the loop continues",
"Second pass through the loop. Char at\nnewDay[1] replaces char at appt[1].\nThen i is incremented. Then j is\nincremented. Then loop condition is \nchecked again and passes.",
"Third pass through the loop. Char at\nnewDay[2] replaces char at appt[2]. \nThen i is incremented. Then j is\nincremented. Then loop condition is \nchecked again and passes.",
"Fourth pass through the loop. Char at\nnewDay[3] replaces char at appt[3].\nThen i is incremented. Then j is\nincremented. Then loop condition is \nchecked again and passes.",
"Fifth pass through the loop. Char at\nnewDay[4] replaces char at appt[4].\nThen i is incremented. Then j is\nincremented. Then loop condition is \nchecked again and passes.",
"Sixth pass through the loop. Char at\nnewDay[5] replaces char at appt[5].\nThen i is incremented. Then j is\nincremented. Then loop condition is \nchecked again and fails because\nis not less than 6.",
"The for loop is exited. The scope of j was\nonly in the for loop, and now\nthat it will not be used anymore\nits data is freed from the stack.",
"The next for loop is started and k is\ndeclared and intialized to 0 on the\nstack. Note that the scope of k\nis just this for loop.",
"The length of newTime is 3. 0 < 3 so the\nfor loop can begin executing the\ncode within.",
"Character at newTime[0] replaces character\nat appt[6].",
"Post-incrementation on i",
"k is incremented by the for loop",
"The loop condition is rechecked. 1 < 6 so\nthe loop continues",
"Second pass through the loop. Char at\nnewTime[1] replaces char at appt[7].\nThen i is incremented. Then k\nis incremented. Then loop condition is\nchecked again and passes.",
"Third pass through the loop. Char at\nnewTime[2]] replaces char at appt[8].\nThen i is incremented. Then k\nis incremented. Then loop condition is\nchecked again and fails because\n3 is not less than 3.",
"This foor loop is exited, so k's memory is\nfreed from the stack.",
"The data for the memory cells in appt up to\nthe end-of-string character is\ncopied to be printed.",
"The print statement outputs the string.\nLook behind you to see the output.\nNotice this is not the intended\noutput of the program. Hopefully,\nafter this walkthrough you are able\nto pick up on where the programmer\nwent wrong in writing this code snippet.",
];

const data = [
"----------------------------------------",
"/mp4-yadsendeW---------------------------",
"/mp4-yadsendeW/yadnoM--------------------",
"/mp4-yadsendeW/yadnoM/mp8----------------",
"/mp4-yadsendeW/yadnoM/mp80000------------",
"/mp4-yadsendeW/yadnoM/mp800000000--------",
"/mp4-yadsendeW/yadnoM/mp800000000--------",
"/mp4-yadsendeM/yadnoM/mp800000000--------",
"/mp4-yadsendeM/yadnoM/mp810000000--------",
"/mp4-yadsendeM/yadnoM/mp810001000--------",
"/mp4-yadsendeM/yadnoM/mp810001000--------",
"/mp4-yadsendoM/yadnoM/mp820002000--------",
"/mp4-yadsennoM/yadnoM/mp830003000--------",
"/mp4-yadsednoM/yadnoM/mp840004000--------",
"/mp4-yadsadnoM/yadnoM/mp850005000--------",
"/mp4-yadyadnoM/yadnoM/mp860006000--------",
"/mp4-yadyadnoM/yadnoM/mp86000------------",
"/mp4-yadyadnoM/yadnoM/mp860000000--------",
"/mp4-yadyadnoM/yadnoM/mp860000000--------",
"/mp4-ya8yadnoM/yadnoM/mp860000000--------",
"/mp4-ya8yadnoM/yadnoM/mp870000000--------",
"/mp4-ya8yadnoM/yadnoM/mp870001000--------",
"/mp4-ya8yadnoM/yadnoM/mp870001000--------",
"/mp4-yp8yadnoM/yadnoM/mp880002000--------",
"/mp4-mp8yadnoM/yadnoM/mp890003000--------",
"/mp4-mp8yadnoM/yadnoM/mp89000------------",
"/mp4-mp8yadnoM/yadnoM/mp89000------------",
"/mp4-mp8yadnoM/yadnoM/mp89000------------",
];

export class Var extends React.Component {

	_appt= () => {
		changeState(2);
	};  

	_newDay= () => {
		changeState(3);
	};  

	_newTime= () => {
		changeState(4);
	}; 

	_i= () => {
		changeState(5);
	}; 

	_j= () => {
		changeState(6);
	}; 

	_k= () => {
		changeState(7);
	};  

	getButtons()
	{
		let buttons = [];

		buttons.push(
			<Text style = {styles.greeting}>
	    		Variables
	    	</Text>
	    )

		if(this.props.counter >= 1) {
			buttons.push(
				<VrButton
		          onClick = {this._appt}
		          style = {styles.buttonBox1}>
		            <Text style={styles.greeting}>
		               appt
		            </Text>
		        </VrButton>
			)
		}

		if(this.props.counter >= 2) {
			buttons.push(
				<VrButton
		          onClick = {this._newDay}
		          style = {styles.buttonBox2}>
		            <Text style={styles.greeting}>
		               newDay
		            </Text>
		        </VrButton>
			)
		}

		if(this.props.counter >= 3) {
			buttons.push(
				<VrButton
		          onClick = {this._newTime}
		          style = {styles.buttonBox3}>
		            <Text style={styles.greeting}>
		               newTime
		            </Text>
		        </VrButton>
			)
		}

		if(this.props.counter >= 4) {
			buttons.push(
				<VrButton
		          onClick = {this._i}
		          style = {styles.buttonBox4}>
		            <Text style={styles.greeting}>
		               i
		            </Text>
		        </VrButton>
			)
		}

		if((this.props.counter >= 5) && (this.props.counter <= 15)) {
			buttons.push(
				<VrButton
		          onClick = {this._j}
		          style = {styles.buttonBox5}>
		            <Text style={styles.greeting}>
		               j
		            </Text>
		        </VrButton>
			)
		}

		if((this.props.counter >= 17) && (this.props.counter <= 24)) {
			buttons.push(
				<VrButton
		          onClick = {this._k}
		          style = {styles.buttonBox6}>
		            <Text style={styles.greeting}>
		               k
		            </Text>
		        </VrButton>
			)
		}

		return buttons;
	};

	render() {
	    return (
	    	<View style = {styles.panelVars}>
		        { this.getButtons() }
			</View>
	    );
	}

};


export class Code extends React.Component {
	
	colorState1()
	{
		let text = [];
		if(this.props.counter == 1) {
			text.push(
				<Text style = {styles.colored}>
					{'char appt[] = "Wednesday 4pm";'}
				</Text>
			)
		} else {
			text.push(
				<Text style = {styles.greeting}>
					{'char appt[] = "Wednesday 4pm";'}
				</Text>
			)
		}
		return text;
	};

	colorState2()
	{
		let text = [];
		if(this.props.counter == 2) {
			text.push(
				<Text style = {styles.colored}>
					{'char newDay[] = "Monday";'}
				</Text>
			)
		} else {
			text.push(
				<Text style = {styles.greeting}>
					{'char newDay[] = "Monday";'}
				</Text>
			)
		}
		return text;
	};

	colorState3()
	{
		let text = [];
		if(this.props.counter == 3) {
			text.push(
				<Text style = {styles.colored}>
					{'char newTime[] = "8pm";'}
				</Text>
			)
		} else {
			text.push(
				<Text style = {styles.greeting}>
					{'char newTime[] = "8pm";'}
				</Text>
			)
		}
		return text;
	};

	colorState4()
	{
		let text = [];
		if(this.props.counter == 4) {
			text.push(
				<Text style = {styles.colored}>
					{`int i = 0;`}
				</Text>
			)
		} else {
			text.push(
				<Text style = {styles.greeting}>
					{`int i = 0;`}
				</Text>
			)
		}
		return text;
	};

	colorState5()
	{
		let m = [];
		if(this.props.counter == 5)
		{
			m.push(
				<Text style={styles.greeting}> 
  					{'for ('} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'int j = 0;'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'j < strlen(newDay);'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'j++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{')'} 
  				</Text> 
			)

		} else if((this.props.counter == 6) || (this.props.counter == 10)) {
			m.push(
				<Text style={styles.greeting}> 
  					{'for ('} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'int j = 0;'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'j < strlen(newDay);'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'j++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{')'} 
  				</Text> 
			)
		} else if(this.props.counter == 9) {
			m.push(
				<Text style={styles.greeting}> 
  					{'for ('} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'int j = 0; '} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'j < strlen(newDay);'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'j++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{')'} 
  				</Text> 
			)
		} else if((this.props.counter >= 11) && (this.props.counter <= 15)) {
			m.push(
				<Text style={styles.colored}> 
  					{'for ('} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'int j = 0; '} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'j < strlen(newDay);'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'j++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{')'} 
  				</Text> 
			)
		} else {
			m.push(
				<Text style={styles.greeting}> 
  					{'for ('} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'int j = 0;'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'j < strlen(newDay);'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'j++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{')'} 
  				</Text> 
			)
		}
		
		return m;
	};

	colorState6()
	{
		let m = [];
		if(this.props.counter == 7)
		{
			m.push(
				<Text style={styles.black}> 
  					{'---'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'appt\['} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'i'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'\] = newDay[j];'} 
  				</Text> 
			)

		} else if(this.props.counter == 8) {
			m.push(
				<Text style={styles.black}> 
  					{'---'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'appt\['} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'i'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'\] = newDay[j];'} 
  				</Text> 
			)
		} else if((this.props.counter >= 11) && (this.props.counter <= 15)) {
			m.push(
				<Text style={styles.black}> 
  					{'---'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'appt\['} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'i'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'\] = newDay[j];'} 
  				</Text> 
			)
		}
		else {
			m.push(
				<Text style={styles.black}> 
  					{'---'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'appt\['} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'i'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'\] = newDay[j];'} 
  				</Text> 
			)
		}
		
		return m;
	};	

	colorState7()
	{
		let m = [];
		if(this.props.counter == 17)
		{
			m.push(
				<Text style={styles.greeting}> 
  					{'for ('} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'int k = 0;'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'k < strlen(newTime);'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'k++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{')'} 
  				</Text> 
			)

		} else if((this.props.counter == 18) || (this.props.counter == 22)) {
			m.push(
				<Text style={styles.greeting}> 
  					{'for ('} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'int k = 0;'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'k < strlen(newTime);'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'k++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{')'} 
  				</Text> 
			)
		} else if(this.props.counter == 21) {
			m.push(
				<Text style={styles.greeting}> 
  					{'for ('} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'int k = 0; '} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'k < strlen(newTime);'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'k++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{')'} 
  				</Text> 
			)
		} else if((this.props.counter >= 23) && (this.props.counter <= 24)) {
			m.push(
				<Text style={styles.colored}> 
  					{'for ('} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'int k = 0; '} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'k < strlen(newTime);'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'k++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{')'} 
  				</Text> 
			)
		} else {
			m.push(
				<Text style={styles.greeting}> 
  					{'for ('} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'int k = 0;'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'k < strlen(newTime);'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.black}> 
  					{'-'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'k++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{')'} 
  				</Text> 
			)
		}
		
		return m;
	};

	colorState8()
	{
		let m = [];
		if(this.props.counter == 19)
		{
			m.push(
				<Text style={styles.black}> 
  					{'---'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'appt\['} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'i'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'\] = newTime[k];'} 
  				</Text> 
			)

		} else if(this.props.counter == 20) {
			m.push(
				<Text style={styles.black}> 
  					{'---'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'appt\['} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'i'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'\] = newTime[k];'} 
  				</Text> 
			)
		} else if((this.props.counter >= 23) && (this.props.counter <= 24)) {
			m.push(
				<Text style={styles.black}> 
  					{'---'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'appt\['} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'i'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.colored}> 
  					{'\] = newTime[k];'} 
  				</Text> 
			)
		}
		else {
			m.push(
				<Text style={styles.black}> 
  					{'---'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'appt\['} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'i'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'++'} 
  				</Text> 
			)
			m.push(
				<Text style={styles.greeting}> 
  					{'\] = newTime[k];'} 
  				</Text> 
			)
		}
		
		return m;
	};	

	colorState9()
	{
		let m = [];
		if((this.props.counter == 26) || (this.props.counter == 27)) 
		{
			m.push(
				<Text style={styles.colored}> 
  					{'printf(\"%s\\n", appt);'} 
  				</Text> 
  			)
		} else {
			m.push(
				<Text style={styles.greeting}> 
  					{'printf(\"%s\\n", appt);'} 
  				</Text> 
  			)
		} 

		return m;
	}

	render() {
	    return (
	 		<View style = {styles.panelCode}>
				<View style = {styles.greetingBox1}>
			        { this.colorState1() }
				  	{ this.colorState2() }
					{ this.colorState3() }
				  	{ this.colorState4() }
				</View>
				<View style = {styles.forLoop}>
				  	{ this.colorState5() }
				</View>
				<View style = {styles.forLoop}>
				  	{ this.colorState6() }
				</View>
				<View style = {styles.forLoop}>
				  	{ this.colorState7() }
				</View>
				<View style = {styles.forLoop}>
				  	{ this.colorState8() }
				</View>
				<View style = {styles.forLoop}>
				  	{ this.colorState9() }
				</View>
		    </View>   
	    );
	}
};


export class Comment extends React.Component {

render() {
    return (
		<View style = {styles.greetingBox1}>
	          <Text style={styles.greeting}>
		    {`Comments:\n${comments[`${this.props.counter}`]}`}
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

	b0()
	{
		let text = [];
		if(this.props.counter == 0) {
			text.push(
				 <Text style = {styles.greeting}> 
				 	-
				 </Text> 
			)
		}
		else if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
				 	\0
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	\0 
				 </Text> 
			)
		}
		return text;
	};

	b1()
	{
		let text = [];
		if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][1]}`} 
				 </Text> 
			)
		} else if((this.props.counter == 26) || (this.props.counter == 27)) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][1]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][1]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b2()
	{
		let text = [];
		if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][2]}`} 
				 </Text> 
			)
		} else if((this.props.counter == 26) || (this.props.counter == 27)) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][2]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][2]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b3()
	{
		let text = [];
		if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][3]}`} 
				 </Text> 
			)
		} else if((this.props.counter == 26) || (this.props.counter == 27)) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][3]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][3]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b4()
	{
		let text = [];
		if(this.props.counter == 0) {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][4]}`} 
				 </Text> 
			)
		} else if(this.props.var1 == true) {
			text.push(
				 <Text style = {styles.red}> 
				 	{`${data[`${this.props.counter}`][4]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.black}> 
				 	{`${data[`${this.props.counter}`][4]}`} 
				 </Text> 
			)
		}
		return text;
		
	};

	b5()
	{
		let text = [];
		if((this.props.counter == 1) || (this.props.counter == 24)) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][5]}`} 
				 </Text> 
			)
		} else if((this.props.counter == 26) || (this.props.counter == 27)) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][5]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][5]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b6()
	{
		let text = [];
		if((this.props.counter == 1) || (this.props.counter == 23)) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][6]}`} 
				 </Text> 
			)
		} else if((this.props.counter == 26) || (this.props.counter == 27)) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][6]}`} 
				 </Text> 
			)
		}  else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][6]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b7()
	{
		let text = [];
		if((this.props.counter == 1) || (this.props.counter == 19)) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][7]}`} 
				 </Text> 
			)
		} else if((this.props.counter == 26) || (this.props.counter == 27)) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][7]}`} 
				 </Text> 
			)
		}  else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][7]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b8()
	{
		let text = [];
		if((this.props.counter == 1) || (this.props.counter == 15)) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][8]}`} 
				 </Text> 
			)
		} else if((this.props.counter == 26) || (this.props.counter == 27)) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][8]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][8]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b9()
	{
		let text = [];
		if((this.props.counter == 1) || (this.props.counter == 14)) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][9]}`} 
				 </Text> 
			)
		} else if((this.props.counter == 26) || (this.props.counter == 27)) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][9]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][9]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b10()
	{
		let text = [];
		if((this.props.counter == 1) || (this.props.counter == 13) ) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][10]}`} 
				 </Text> 
			)
		} else if((this.props.counter == 26) || (this.props.counter == 27)) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][10]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][10]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b11()
	{
		let text = [];
		if((this.props.counter == 1) || (this.props.counter == 12) ) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][11]}`} 
				 </Text> 
			)
		} else if((this.props.counter == 26) || (this.props.counter == 27)) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][11]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][11]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b12()
	{
		let text = [];
		if((this.props.counter == 1) || (this.props.counter == 11) ) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][12]}`} 
				 </Text> 
			)
		} else if((this.props.counter == 26) || (this.props.counter == 27)) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][12]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][12]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b13()
	{
		let text = [];
		if((this.props.counter == 1) || (this.props.counter == 7) ) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][13]}`} 
				 </Text> 
			)
		} else if((this.props.counter == 26) || (this.props.counter == 27)) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][13]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][13]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b14()
	{
		let text = [];
		if(this.props.counter < 2) {
			text.push(
				 <Text style = {styles.greeting}> 
				 	-
				 </Text> 
			)
		}
		else if(this.props.counter == 2) {
			text.push(
				 <Text style = {styles.colored}> 
				 	\0
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	\0 
				 </Text> 
			)
		}
		return text;
	};

	b15()
	{
		let text = [];
		if(this.props.counter == 2) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][15]}`} 
				 </Text> 
			)
		} else if(this.props.counter == 15) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][15]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][15]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b16()
	{
		let text = [];
		if(this.props.counter == 2) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][16]}`} 
				 </Text> 
			)
		} else if(this.props.counter == 14) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][16]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][16]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b17()
	{
		let text = [];
		if(this.props.counter == 2) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][17]}`} 
				 </Text> 
			)
		} else if(this.props.counter == 13) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][17]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][17]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b18()
	{
		let text = [];
		if(this.props.counter == 2) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][18]}`} 
				 </Text> 
			)
		} else if(this.props.counter == 12) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][18]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][18]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b19()
	{
		let text = [];
		if(this.props.counter == 2) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][19]}`} 
				 </Text> 
			)
		} else if(this.props.counter == 11) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][19]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][19]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b20()
	{
		let text = [];
		if(this.props.counter == 2) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][20]}`} 
				 </Text> 
			)
		} else if(this.props.counter == 7) {
			text.push(
				 <Text style = {styles.green}> 
				 	{`${data[`${this.props.counter}`][20]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][20]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b21()
	{
		let text = [];
		if(this.props.counter < 3) {
			text.push(
				 <Text style = {styles.greeting}> 
				 	-
				 </Text> 
			)
		}
		else if(this.props.counter == 3) {
			text.push(
				 <Text style = {styles.colored}> 
				 	\0
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	\0 
				 </Text> 
			)
		}
		return text;
	};

	b22()
	{
		let text = [];
		if(this.props.counter == 3) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][22]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][22]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b23()
	{
		let text = [];
		if(this.props.counter == 3) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][23]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][23]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b24()
	{
		let text = [];
		if(this.props.counter == 3) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][24]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][24]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b25()
	{
		let text = [];
		if((this.props.counter == 4) || (this.props.counter == 8) || ((this.props.counter >= 11) && (this.props.counter <= 15)) || (this.props.counter == 20) || ((this.props.counter >= 23) && (this.props.counter <= 24))) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][25]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][25]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b26()
	{
		let text = [];
		if(this.props.counter == 4) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][26]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][26]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b27()
	{
		let text = [];
		if(this.props.counter == 4) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][27]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][27]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b28()
	{
		let text = [];
		if(this.props.counter == 4) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][28]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][28]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b29()
	{
		let text = [];
		if((this.props.counter == 5) || (this.props.counter == 9) || ((this.props.counter >= 11) && (this.props.counter <= 15)) || (this.props.counter == 17) || (this.props.counter == 21) || ((this.props.counter >= 23) && (this.props.counter <= 24))) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][29]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][29]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b30()
	{
		let text = [];
		if((this.props.counter == 5) || (this.props.counter == 17)) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][30]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][30]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b31()
	{
		let text = [];
		if((this.props.counter == 5) || (this.props.counter == 17)) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][31]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][31]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b32()
	{
		let text = [];
		if((this.props.counter == 5) || (this.props.counter == 17)) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][32]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][32]}`} 
				 </Text> 
			)
		}
		return text;
	};

	B0()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b0() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b0() } 
				</View>
			)
		}
		return box;
	};

	B1()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b1() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b1() } 
				</View>
			)
		}
		return box;
	};

	B2()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b2() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b2() } 
				</View>
			)
		}
		return box;
	};

	B3()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b3() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b3() } 
				</View>
			)
		}
		return box;
	};

	B4()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b4() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b4() } 
				</View>
			)
		}
		return box;
	};

	B5()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b5() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b5() } 
				</View>
			)
		}
		return box;
	};

	B6()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b6() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b6() } 
				</View>
			)
		}
		return box;
	};

	B7()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b7() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b7() } 
				</View>
			)
		}
		return box;
	};

	B8()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b8() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b8() } 
				</View>
			)
		}
		return box;
	};

	B9()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b9() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b9() } 
				</View>
			)
		}
		return box;
	};

	B10()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b10() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b10() } 
				</View>
			)
		}
		return box;
	};

	B11()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b11() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b11() } 
				</View>
			)
		}
		return box;
	};

	B12()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b12() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b12() } 
				</View>
			)
		}
		return box;
	};

	B13()
	{
		let box = [];
		if (this.props.var1 == true) {
			box.push(
				<View style = {styles.greetingBox2Red}> 
					{ this.b13() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b13() } 
				</View>
			)
		}
		return box;
	};

	B14()
	{
		let box = [];
		if (this.props.var2 == true) {
			box.push(
				<View style = {styles.greetingBox2Purple}> 
					{ this.b14() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b14() } 
				</View>
			)
		}
		return box;
	};

	B15()
	{
		let box = [];
		if (this.props.var2 == true) {
			box.push(
				<View style = {styles.greetingBox2Purple}> 
					{ this.b15() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b15() } 
				</View>
			)
		}
		return box;
	};

	B16()
	{
		let box = [];
		if (this.props.var2 == true) {
			box.push(
				<View style = {styles.greetingBox2Purple}> 
					{ this.b16() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b16() } 
				</View>
			)
		}
		return box;
	};

	B17()
	{
		let box = [];
		if (this.props.var2 == true) {
			box.push(
				<View style = {styles.greetingBox2Purple}> 
					{ this.b17() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b17() } 
				</View>
			)
		}
		return box;
	};

	B18()
	{
		let box = [];
		if (this.props.var2 == true) {
			box.push(
				<View style = {styles.greetingBox2Purple}> 
					{ this.b18() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b18() } 
				</View>
			)
		}
		return box;
	};

	B19()
	{
		let box = [];
		if (this.props.var2 == true) {
			box.push(
				<View style = {styles.greetingBox2Purple}> 
					{ this.b19() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b19() } 
				</View>
			)
		}
		return box;
	};

	B20()
	{
		let box = [];
		if (this.props.var2 == true) {
			box.push(
				<View style = {styles.greetingBox2Purple}> 
					{ this.b20() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b20() } 
				</View>
			)
		}
		return box;
	};

	B21()
	{
		let box = [];
		if (this.props.var3 == true) {
			box.push(
				<View style = {styles.greetingBox2Blue}> 
					{ this.b21() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b21() } 
				</View>
			)
		}
		return box;
	};

	B22()
	{
		let box = [];
		if (this.props.var3 == true) {
			box.push(
				<View style = {styles.greetingBox2Blue}> 
					{ this.b22() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b22() } 
				</View>
			)
		}
		return box;
	};

	B23()
	{
		let box = [];
		if (this.props.var3 == true) {
			box.push(
				<View style = {styles.greetingBox2Blue}> 
					{ this.b23() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b23() } 
				</View>
			)
		}
		return box;
	};

	B24()
	{
		let box = [];
		if (this.props.var3 == true) {
			box.push(
				<View style = {styles.greetingBox2Blue}> 
					{ this.b24() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b24() } 
				</View>
			)
		}
		return box;
	};

	B25()
	{
		let box = [];
		if (this.props.var4 == true) {
			box.push(
				<View style = {styles.greetingBox2Orange}> 
					{ this.b25() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b25() } 
				</View>
			)
		}
		return box;
	};

	B26()
	{
		let box = [];
		if (this.props.var4 == true) {
			box.push(
				<View style = {styles.greetingBox2Orange}> 
					{ this.b26() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b26() } 
				</View>
			)
		}
		return box;
	};

	B27()
	{
		let box = [];
		if (this.props.var4 == true) {
			box.push(
				<View style = {styles.greetingBox2Orange}> 
					{ this.b27() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b27() } 
				</View>
			)
		}
		return box;
	};

	B28()
	{
		let box = [];
		if (this.props.var4 == true) {
			box.push(
				<View style = {styles.greetingBox2Orange}> 
					{ this.b28() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b28() } 
				</View>
			)
		}
		return box;
	};

	B29()
	{
		let box = [];
		if (this.props.var5 == true) {
			box.push(
				<View style = {styles.greetingBox2Royal}> 
					{ this.b29() } 
				</View>
			)
		} else if (this.props.var6 == true) {
			box.push(
				<View style = {styles.greetingBox2Violet}> 
					{ this.b29() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b29() } 
				</View>
			)
		}
		return box;
	};

	B30()
	{
		let box = [];
		if (this.props.var5 == true) {
			box.push(
				<View style = {styles.greetingBox2Royal}> 
					{ this.b30() } 
				</View>
			)
		} else if (this.props.var6 == true) {
			box.push(
				<View style = {styles.greetingBox2Violet}> 
					{ this.b30() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b30() } 
				</View>
			)
		}
		return box;
	};

	B31()
	{
		let box = [];
		if (this.props.var5 == true) {
			box.push(
				<View style = {styles.greetingBox2Royal}> 
					{ this.b31() } 
				</View>
			)
		} else if (this.props.var6 == true) {
			box.push(
				<View style = {styles.greetingBox2Violet}> 
					{ this.b31() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b31() } 
				</View>
			)
		}
		return box;
	};

	B32()
	{
		let box = [];
		if (this.props.var5 == true) {
			box.push(
				<View style = {styles.greetingBox2Royal}> 
					{ this.b32() } 
				</View>
			)
		} else if (this.props.var6 == true) {
			box.push(
				<View style = {styles.greetingBox2Violet}> 
					{ this.b32() } 
				</View>
			)
		} else {
			box.push(
				<View style = {styles.greetingBox2}> 
					{ this.b32() } 
				</View>
			)
		}
		return box;
	};

	

render() {
    return (
    	<View style={styles.panel3}>
			{ this.B0() }
			{ this.B1() }
			{ this.B2() }
			{ this.B3() }
			{ this.B4() }
			{ this.B5() }
			{ this.B6() }
			{ this.B7() }
			{ this.B8() }
			{ this.B9() }
			{ this.B10() }
			{ this.B11() }
			{ this.B12() }
			{ this.B13() }
			{ this.B14() }
			{ this.B15() }
			{ this.B16() }
			{ this.B17() }
			{ this.B18() }
			{ this.B19() }
			{ this.B20() }
			{ this.B21() }
			{ this.B22() }
			{ this.B23() }
			{ this.B24() }
			{ this.B25() }
			{ this.B26() }
			{ this.B27() }
			{ this.B28() }
			{ this.B29() }
			{ this.B30() }
			{ this.B31() }
			{ this.B32() }
	    </View>
    );
  }
};

export class Output extends React.Component {

	getOut() 
	{
		let out = []

		if(this.props.counter == 27)
		{
			out.push(
				<Text style = {styles.greeting}>
					Monday8pm 4pm
				</Text>
			)
		}

		return out;
	}

	render() {
	    return (
			<View style = {styles.greetingBox1}>
		        <Text style={styles.greeting}>
			    	OUTPUT
			 	</Text>
			 	{ this.getOut() }
			</View>
	    );
	  }
};

const ConnectedCode = connect(Code);
const ConnectedComment = connect(Comment);
const ConnectedControl = connect(Control);
const ConnectedStack = connect(Stack);
const ConnectedVar = connect(Var);
const ConnectedOutput = connect(Output);


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
    width: 200,
    height: 50,
    display: 'flex',
    flexDirection: 'row-reverse',
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
  panelCode: {
    // Fill the entire surface
    width: 500,
    height: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'stretch',
  },
  panelBig: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
   panelVars: {
    // Fill the entire surface
    width: 150,
    height: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonBox1: {
    padding: 4,
    backgroundColor: '#ef010b',
  },
  greetingBox2Red: {
    padding: 2,
    backgroundColor: '#ef010b',
    borderWidth: 1,
    borderColor: '#639dda',
  },
  buttonBox2: {
    padding: 4,
    backgroundColor: '#a176ac',
  },
  greetingBox2Purple: {
    padding: 2,
    backgroundColor: '#a176ac',
    borderWidth: 1,
    borderColor: '#639dda',
  },
  buttonBox3: {
    padding: 4,
    backgroundColor: '#4ebdad',
  },
  greetingBox2Blue: {
    padding: 2,
    backgroundColor: '#4ebdad',
    borderWidth: 1,
    borderColor: '#639dda',
  },
  buttonBox4: {
    padding: 4,
    backgroundColor: '#ff6600',
  },
  greetingBox2Orange: {
    padding: 2,
    backgroundColor: '#ff6600',
    borderWidth: 1,
    borderColor: '#639dda',
  },
  buttonBox5: {
    padding: 4,
    backgroundColor: '#0000cc',
  },
  greetingBox2Royal: {
    padding: 2,
    backgroundColor: '#0000cc',
    borderWidth: 1,
    borderColor: '#639dda',
  },
  buttonBox6: {
    padding: 4,
    backgroundColor: '#660099',
  },
  greetingBox2Violet: {
    padding: 2,
    backgroundColor: '#660099',
    borderWidth: 1,
    borderColor: '#639dda',
  },
  forLoop: {
    padding: 2,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    display: 'flex',
    flexDirection: 'row'
  },
  colored: {
    fontSize: 30,
    color: 'yellow'
  },
  greeting: {
  	fontSize: 30
  },
  green: {
    fontSize: 30,
    color: 'green'
  },
  black: {
  	fontSize: 30,
  	color: 'black'
  },
  red: {
  	fontSize: 30,
  	color: '#ef010b'
  },
 });

AppRegistry.registerComponent('ConnectedComment', () => ConnectedComment);
AppRegistry.registerComponent('ConnectedCode', () => ConnectedCode);
AppRegistry.registerComponent('ConnectedControl', () => ConnectedControl);
AppRegistry.registerComponent('ConnectedStack', () => ConnectedStack);
AppRegistry.registerComponent('ConnectedVar', () => ConnectedVar);
AppRegistry.registerComponent('ConnectedOutput', () => ConnectedOutput);
