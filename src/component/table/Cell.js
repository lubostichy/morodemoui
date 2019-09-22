import React from 'react';

class Cell extends React.Component {

	render() {
		return (
			<td>{this.props.cell}</td>
		);
	}
};

export default Cell;