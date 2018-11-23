import React from 'react';
// uuid package to create unique IDs
const uuidv1 = require('uuid/v1');

class AppForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      id: ''
    };
  };

  handleNewItem = (event) => {
    const newDescription = event.target.value;

    this.setState(() => ({
      description: newDescription,
      id: uuidv1()
    }))
  };

  onChangeNewItem = (event) => {
    event.preventDefault();
    this.props.changeNewItem(this.state);
  };

  render() {
    return (
      <div>
        <h3>App Form</h3>
        <form>
          <input
            type="text"
            placeholder="Enter item"
            value={this.state.description}
            onChange={this.handleNewItem.bind(this)}
          />
          <div>
            <button onClick={this.onChangeNewItem.bind(this)}>Add Item</button>
          </div>
        </form>
      </div>
    )
  }

};

export default AppForm;
