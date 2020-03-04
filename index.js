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
"Stack grows backwards, so appt is\nput at the end of the stack.",
"Each character is 1 byte in a c-string.",
"newTime added to stack",
"An integer is 4 bytes. That is why\ni gets 4 boxes.",
"j is declared in the for loop. It is\nstill stored in the stack, but\nits scope is only in this for loop.",
"The length of newDay is 6 because it\nis the number of characters\nbefore the end-of-string character.\nThe for loop continues because 0 < 6.",
"Letter at newDay[0] replaces letter\nat appt[0]",
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
				<Text style={styles.greeting}> 
  					{'j < strlen(newDay);'} 
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

		} else if(this.props.counter == 6) {
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
				<Text style={styles.colored}> 
  					{'j < strlen(newDay);'} 
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
				<Text style={styles.greeting}> 
  					{'j < strlen(newDay);'} 
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
				<Text style={styles.greeting}> 
  					{'j < strlen(newDay);'} 
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
		} else {
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

				<View style = {styles.greetingBox1}>
					<Text style={styles.greeting}>
			            {'for (int k = 0; k < strlen(newTime); k++)'}
			        </Text>
				  <Text style={styles.greeting}>
			              {"\t\tappt[i++] = newTime[k];"}
				  </Text>
				  <Text style={styles.greeting}>
			            {'printf("%s\\n", appt);'}
			       </Text>
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
		if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][0]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][0]}`} 
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
		if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][4]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][4]}`} 
				 </Text> 
			)
		}
		return text;
	};

	b5()
	{
		let text = [];
		if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
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
		if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][6]}`} 
				 </Text> 
			)
		} else {
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
		if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][7]}`} 
				 </Text> 
			)
		} else {
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
		if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
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
		if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
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
		if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
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
		if(this.props.counter == 1) {
			text.push(
				 <Text style = {styles.colored}> 
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
		if((this.props.counter == 1) || (this.props.counter == 7) ) {
			text.push(
				 <Text style = {styles.colored}> 
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
		if(this.props.counter == 2) {
			text.push(
				 <Text style = {styles.colored}> 
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
		if(this.props.counter == 2) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][14]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][14]}`} 
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
		} else if(this.props.counter == 7) {
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
		if(this.props.counter == 3) {
			text.push(
				 <Text style = {styles.colored}> 
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
		if(this.props.counter == 3) {
			text.push(
				 <Text style = {styles.colored}> 
				 	{`${data[`${this.props.counter}`][21]}`} 
				 </Text> 
			)
		} else {
			text.push(
				 <Text style = {styles.greeting}> 
				 	{`${data[`${this.props.counter}`][21]}`} 
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
		if((this.props.counter == 4) || (this.props.counter == 8)) {
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
		if(this.props.counter == 4) {
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
		if((this.props.counter == 5) || (this.props.counter == 9)) {
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
		if(this.props.counter == 5) {
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
		if(this.props.counter == 5) {
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
		if(this.props.counter == 5) {
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
	
		text.push(
			 <Text style = {styles.greeting}> 
			 	{`${data[`${this.props.counter}`][32]}`} 
			 </Text> 
		)

		return text;
	};

render() {
    return (
    	<View style={styles.panel3}>
			<View style = {styles.greetingBox2}> 
				{ this.b0() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b1() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b2() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b3() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b4() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b5() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b6() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b7() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b8() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b9() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b10() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b11() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b12() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b13() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b14() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b15() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b16() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b17() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b18() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b19() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b20() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b21() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b22() } 
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b23() }  
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b24() }  
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b25() }  
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b26() }  
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b27() }  
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b28() }  
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b29() }  
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b30() }  
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b31() }  
			</View>
			<View style = {styles.greetingBox2}> 
				{ this.b32() }  
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
  panelCode: {
    // Fill the entire surface
    width: 700,
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
  
 });

AppRegistry.registerComponent('ConnectedComment', () => ConnectedComment);
AppRegistry.registerComponent('ConnectedCode', () => ConnectedCode);
AppRegistry.registerComponent('ConnectedControl', () => ConnectedControl);
AppRegistry.registerComponent('ConnectedStack', () => ConnectedStack);
