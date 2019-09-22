import React from 'react';
import Header from './Header';
import Body from './Body';

class Table extends React.Component {

	render() {
		return (
			<div>
				<table className="table">
					<Header />
					<Body users={this.props.users} getUsers={this.props.getUsers}/>
				</table>
			</div>
		);
	}
}

export default Table