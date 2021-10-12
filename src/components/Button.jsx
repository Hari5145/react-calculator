import React from "react";
import "./Button.css";

const isOperator = val => {
	return !isNaN(val) || val === "." || val === "=";
};

const Button = props => (
	<div
		className={`button-wrapper ${
			isOperator(props.children) ? null : "operator"
		}`}
		onClick={() => props.hanClick(props.children)}
	>
		{props.children}
	</div>
);
export default Button;
