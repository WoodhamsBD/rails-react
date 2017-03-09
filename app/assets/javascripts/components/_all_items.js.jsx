var AllItems = React.createClass ({
	// delete action for each item
	handleDelete(id) {
		this.props.handleDelete(id);
		console.log(this);
	},

	// Display all items with id
	render() {
		var items = this.props.items.map((item) => {
		return (
			<div key={item.id}>
				<h3>{item.name}</h3>
				<p>{item.description}</p>
				<button onClick = {this.handleDelete.bind(this, item.id)} >Delete</button>
			</div>
			)
	});

		return(
		<div>
			{items}
		</div>
		)
	}

});