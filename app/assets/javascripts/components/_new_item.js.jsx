var NewItem = React.createClass({
	
	//Ajax POST from submit button
	handleClick() {
		var name = this.refs.name.value;
		var description = this.refs.description.value;
		
		$.ajax({
			url: 'api/v1/items',
			type: 'POST',
			data: { item: { name: name, description: description } },
			success: (item) => {
				this.props.handleSubmit(item);
			}
		});
	},

	// New item elements for POST
	render() {
		return (
			<div>
				<input ref='name' placeholder='Item Name' />
				<input ref='description' placeholder='Item description' />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
});