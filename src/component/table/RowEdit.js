import React from 'react';
import Cell from './Cell';
import superagent from 'superagent';
import PropTypes from 'prop-types';

class RowEdit extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			userId: '',
			userName: '',
			userUsername: '',
			userPassword: '',
			userRole: '',
			isEditMode: false
		}
	}

	componentDidMount() {
		this.setState({
			userId: this.props.user.id,
			userName: this.props.user.name,
			userUsername: this.props.user.username,
			userPassword: this.props.user.password,
			userRole: this.props.user.role
		});
	}

	editUser(userId) {
		superagent.put('/api/users')
			.send({
				id: this.state.userId,
				name: this.state.userName,
				username: this.state.userUsername,
				password: this.state.userPassword,
				role: this.state.userRole
			}).then(res => {
				this.props.changeEditMode(false, 0);
				this.props.getUsers();

			});
	}

	cancelEdit() {
		this.props.changeEditMode(false, 0);
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {

		return (
			<tr>

				<Cell cell={'#' + this.props.user.id} />

				<td>
					<input type="hidden" onChange={this.onChange} name="userId" value={this.state.userId} />
					<input type="text" onChange={this.onChange} name="userName" value={this.state.userName} className="form-control" />
				</td>
				<td>
					<input type="text" onChange={this.onChange} name="userUsername" value={this.state.userUsername} className="form-control" />
					<input type="hidden" onChange={this.onChange} name="userPassword" value={this.state.userPassword} />
					<input type="hidden" onChange={this.onChange} name="userRole" value={this.state.userRole} />
				</td>
				<td>
					<button className="btn btn-outline-success" onClick={() => this.editUser(this.props.user.id)}>Uložit</button>
					&nbsp;
				<button className="btn btn-outline-danger" onClick={() => this.cancelEdit(this.props.user.id)}>Zrušit</button>
				</td>

			</tr>
		);
	}


};

RowEdit.propTypes = {
	user: PropTypes.object,
	getUsers: PropTypes.func,
	changeEditMode: PropTypes.func
}

export default RowEdit;

