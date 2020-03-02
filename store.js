import React from 'react';

const State = {
  counter: 0,
  i: 0,
  j: 0,
  k: 0,
  sl1Cntr: 0
}

const listeners = new Set();

function updateComponents() {
	for (const cb of listeners.values()) {
		cb();
	}
}



export function changeState(newState) {
	let currState = newState;

	if (currState == 1)
	{
		State.counter = State.counter + 1;

		if(State.counter <= 4) {
			State.sl1Cntr = 0;
		} else {
			State.sl1Cntr = 1;
		}

		if(State.counter <= 6) {
			State.i = 0;
		} else if(State.counter <= 10) {
			State.i = 1;
		}
		  
		if(State.counter <= 7) {
			State.j = 0;
		} else if(State.counter <= 10) {
			State.j = 1;
		}
	} else {
		State.counter = State.counter - 1;

		if(State.counter <= 4) {
			State.sl1Cntr = 0;
		} else {
			State.sl1Cntr = 1;
		}

		if(State.counter <= 6) {
			State.i = 0;
		} else if(State.counter <= 10) {
			State.i = 1;
		}
		  
		if(State.counter <= 7) {
			State.j = 0;
		} else if(State.counter <= 10) {
			State.j = 1;
		}
	}

	updateComponents();
}

export function connect(Component) {
	return class Wrapper extends React.Component {
		state = {
			counter: State.counter,
  			i: State.i,
  			j: State.j,
  			k: State.k,
  			sl1Cntr: State.sl1Cntr
		}

		_listener = () => {
			this.setState({
				counter: State.counter,
  				i: State.i,
  				j: State.j,
  				k: State.k,
  				sl1Cntr: State.sl1Cntr
			})
		}

		componentDidMount() {
			listeners.add(this._listener);
		}

		render() {
			return(
				<Component
				{...this.props}
				counter={this.state.counter}
				i={this.state.i}
				j={this.state.j}
				k={this.state.k}
				sl1Cntr={this.state.sl1Cntr}
				/>
			)
		}
	}
}
