import React from 'react';
import AppForm from './AppForm';

class AppList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        // seed data
        { description: 'a', id: '1' },
        { description: 'b', id: '2' }
      ]
    }
  };

  onChangeNewItem(newItem) {
    const item = {
      description: newItem.description,
      id: newItem.id
    };

    const addItems = [item, ...this.state.items];
    this.setState({
      items: addItems
    });
  };

  render() {
    return (
      <div>
        <AppForm changeNewItem={this.onChangeNewItem.bind(this)} />
        <h3>App List</h3>
        {this.state.items.map((item) => {
          return (<p key={item.id}>{item.description}</p>)
        })}
      </div>
    )
  }
};

export default AppList;
