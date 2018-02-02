/**
 * Created by Kelvin Ishigo on 1/25/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PillButton from "../components/PillButton";

let PillButtonStack = (props) => {
	let buttonStack = props.buttons.map((button, i) => {
		// partial function curry action and target here
		let curryOnClickFn = (action, target) => {
			return () => {
				button.onClickFn(action, target);
			}
		};
		return (
			<PillButton key={i} onClickFn={curryOnClickFn(button.action, button.target)} title={button.title} width={"80px"} titleColor={"white"} backgroundColor={"blue"} disabled={false}/>
		)
	});
	return <div>
		{ buttonStack }
		</div>
};

export default PillButtonStack;