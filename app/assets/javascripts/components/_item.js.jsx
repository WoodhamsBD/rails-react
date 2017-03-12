var Item = React.createClass({

	getInitialState() {
		return {editable: false}
	},

	handleEdit() {
		this.setState({editale: !this.state.editable })
	},

	render() {
		return (
			<div>
				<h3>{this.props.item.name}</h3>
				<p>{this.props.item.description}</p>
				<button onClick={this.props.handleDelete} >handleDelete</button>
				<button onClick={this.props.handleEdit} >Edit</button>
			</div>
		)
	}
});