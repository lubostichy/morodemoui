import React from 'react';
import Row from './Row';
import RowEdit from './RowEdit';

class Body extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isEditMode: false,
			editUserId: 0
		}
	}

	changeEditMode(isEditMode, editUserId) {
		this.setState({ isEditMode });
		this.setState({ editUserId });
	}

	render() {
		return (
			<tbody>
				{(this.props.users.length > 0) ? (

					this.props.users.map((user, index) => {
						return (
							(this.state.isEditMode && this.state.editUserId === user.id) ?
								<RowEdit user={user} key={index} getUsers={this.props.getUsers} changeEditMode={this.changeEditMode.bind(this)} /> :
								<Row user={user} key={index} getUsers={this.props.getUsers} changeEditMode={this.changeEditMode.bind(this)} />
						);
					})) : <tr><td colSpan="2">Loading...</td></tr>}
			</tbody>
		);
	}
}

export default Body