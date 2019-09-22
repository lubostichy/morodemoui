import React from 'react';

class Header extends React.Component {
	render() {
		const thStyle = {
			width: '40%'
		}
		return (
			<thead>
				<tr>
					<th>Id</th>
					<th style={thStyle}>Jméno</th>
					<th style={thStyle}>Login</th>
					<th>Akce</th>
				</tr>
			</thead>
		);
	}
}


export default Header