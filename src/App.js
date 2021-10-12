import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import * as math from "mathjs";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: "",
		};
	}

	adToInput = val => {
		this.setState({ input: this.state.input + val });
	};

	handleEqual = () => {
		this.setState({ input: math.evaluate(this.state.input) });
	};
	render() {
		return (
			<div class="app" style={{cursor:"pointer"}}>
				<div className="calc-wrapper">
					<Input input={this.state.input} />
					<div className="row">
						<Button hanClick={this.adToInput}>7</Button>
						<Button hanClick={this.adToInput}>8</Button>
						<Button hanClick={this.adToInput}>9</Button>
						<Button hanClick={this.adToInput}>/</Button>
					</div>
					<div className="row">
						<Button hanClick={this.adToInput}>4</Button>
						<Button hanClick={this.adToInput}>5</Button>
						<Button hanClick={this.adToInput}>6</Button>
						<Button hanClick={this.adToInput}>x</Button>
					</div>
					<div className="row">
						<Button hanClick={this.adToInput}>1</Button>
						<Button hanClick={this.adToInput}>2</Button>
						<Button hanClick={this.adToInput}>3</Button>
						<Button hanClick={this.adToInput}>+</Button>
					</div>
					<div className="row">
						<Button hanClick={this.adToInput}>.</Button>
						<Button hanClick={this.adToInput}>0</Button>
						<Button hanClick={() => this.handleEqual()}>=</Button>
						<Button hanClick={this.adToInput}>-</Button>
					</div>
					<div className="row">
						<ClearButton handleClear={() => this.setState({ input: "" })}>
							Clear
						</ClearButton>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
