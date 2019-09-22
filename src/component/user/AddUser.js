import React from 'react';
import superagent from 'superagent';

class AddUser extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: ''
		}
	}

	adddUser = (e) => {
		e.preventDefault();

		superagent.post('/api/users')
			.type('application/json')
			.send({
				name: this.state.name
			}).then(res => {
				console.log(res);
				if (res.ok) {
					this.props.getUsers();
				}
			});
		this.setState({ name: "" });
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-4">
					<form>
						<div className="form-group">
							<label>Nový uživatel:</label>
							<input type="text" placeholder="Zadejte jméno" name="name" className="form-control" value={this.state.name} onChange={this.onChange} />
						</div>
						<button className="btn btn-outline-primary" onClick={this.adddUser}>Přidat</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddUser;