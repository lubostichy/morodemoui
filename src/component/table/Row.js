import React from 'react';
import Cell from './Cell';
import superagent from 'superagent';
import PropTypes from 'prop-types';

class Row extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			userId: '',
			userName: ''
		}
	}

	componentDidMount() {
		this.setState({
			userId: this.props.user.id,
			userName: this.props.user.name
		});
	}

	editUser(userId) {
		this.props.changeEditMode(true, userId);
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	deleteUser(userId) {
		superagent.delete('/secured/users/' + userId)
			.auth('admin', '1234')
			.then(res => {
				if (res.ok) {
					this.props.getUsers();
				}
			});
	};


	render() {
		return (
			<tr>
				<Cell cell={'#' + this.props.user.id} />
				<Cell cell={this.props.user.name} />
				<Cell cell={this.props.user.username} />
				<td>
					<button className="btn btn-outline-success" onClick={() => this.editUser(this.props.user.id)}>Editovat</button>
					&nbsp;
				<button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Smazat uživatele ' + this.props.user.name + '?')) this.deleteUser(this.props.user.id) }}>Smazat</button>
				</td>

			</tr>
		);
	}


};

Row.propTypes = {
	user: PropTypes.object,
	getUsers: PropTypes.func,
	changeEditMode: PropTypes.func
}

export default Row;

