/**
 * Created by Kelvin Ishigo on 1/30/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateMDPContainer} from "../actions";
import MDPTest from "../components/MDPTest";

class MDPTestContainer extends React.Component {
	constructor(props) {
		super(props);
		console.log('MDPTestContainer: constructor');
		this.actions = [];
	}

	componentWillMount() {
		console.log('MDPTestContainer: componentWillMount')
		// openHeroContainer('Gizmo');
	}

	componentDidMount() {
		console.log('MDPTestContainer: componentDidMount')
	}

	componentWillReceiveProps(nextProps) {
		console.log('MDPTestContainer: componentWillReceiveProps')
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('MDPTestContainer: componentWillUpdate')
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('MDPTestContainer: componentDidUpdate')
	}

	componentWillUnmount() {
		console.log('MDPTestContainer: componentWillUnmount')
	}

	/**
	 * May need to map and create a palatable data stream
	 * @returns {props|*}
	 */
	cleanProps = () => {
		let test = {...this.props};
		console.log(test);
		return test;
	};

	render() {
		console.log('MDPTestContainer: render');
		return (
			<div>
				<button onClick={() => this.props.testUpdateMDPAction()}>update</button>
				<MDPTest hero={this.cleanProps()} actions={this.actions}/>
			</div>
		)
	}
}

let myDispatch;

const mapStateToProps = state => {
	let mdp = {...state.movies.mdp};
	console.log(mdp);
	return mdp;
};

const mapDispatchToProps = dispatch => {
	myDispatch = dispatch;
	return bindActionCreators({
		testUpdateMDPAction: () => updateMDPContainer()
	}, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MDPTestContainer)
// export default MDPTestContainer